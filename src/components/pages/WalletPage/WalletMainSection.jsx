import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  BankOutlined,
  CheckCircleOutlined,
  DollarCircleOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Image, Row, Space, Typography, message, Spin, Modal, Input, Tag } from "antd";
import React, { useEffect, useState } from "react";
import { addPaymentMethod } from '../../../api/paymentMethod';
import { getWalletInfo, getWalletTransactions, createDepositWalletLink, requestWithdraw, createWallet } from "../../../api/wallet";

const { Title, Text, Paragraph } = Typography;

const WalletMainSection = () => {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [wallet, setWallet] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [depositModal, setDepositModal] = useState(false);
  const [withdrawModal, setWithdrawModal] = useState(false);
  const [amount, setAmount] = useState(0);
  const [desc, setDesc] = useState("");
  const [actionLoading, setActionLoading] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  // Thêm state cho modal liên kết tài khoản
  const [linkAccountModal, setLinkAccountModal] = useState(false);
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountHolder, setAccountHolder] = useState("");
  const [addBankLoading, setAddBankLoading] = useState(false);

  console.log("WalletMainSection render, linkAccountModal:", linkAccountModal);

  // Hàm xử lý xác nhận liên kết tài khoản ngân hàng
  const handleAddBank = async () => {
    if (!bankName || !accountNumber || !accountHolder) {
      message.error("Vui lòng nhập đầy đủ thông tin tài khoản ngân hàng.");
      return;
    }
    setAddBankLoading(true);
    try {
      await addPaymentMethod({
        bankName,
        accountNumber,
        accountHolder,
        walletId: wallet?.walletId || wallet?.id // lấy đúng trường id của wallet
      });
      message.success("Liên kết tài khoản ngân hàng thành công!");
      setLinkAccountModal(false);
      setBankName("");
      setAccountNumber("");
      setAccountHolder("");
      fetchData();
    } catch {
      message.error("Lỗi khi liên kết tài khoản. Vui lòng thử lại.");
    } finally {
      setAddBankLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    fetchPaymentMethods();
  }, []);

  const fetchPaymentMethods = async () => {
    try {
      const res = await import('../../../api/paymentMethod').then(mod => mod.getPaymentMethods());
      setPaymentMethods(res.data);
    } catch {
      setPaymentMethods([]);
    }
  }

  // Tự động reload khi quay lại tab
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        fetchData();
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [walletRes, txRes] = await Promise.all([
        getWalletInfo().catch(err => {
          if (err.response && err.response.status === 404) return { data: null };
          throw err;
        }),
        getWalletTransactions(),
      ]);
      setWallet(walletRes.data);
      const filtered = Array.isArray(txRes.data)
        ? txRes.data.filter(t => t && (t.status === 'SUCCESS' || t.status === 'FAILE'))
        : [];
      setTransactions(filtered);
    } catch {
      setWallet(null);
      setTransactions([]);
      message.error("Failed to load wallet info");
    }
    setLoading(false);
  };

  const handleDeposit = async () => {
    setActionLoading(true);
    try {
      // Sử dụng API mới dành riêng cho nạp ví
      const depositRes = await createDepositWalletLink(amount, desc);
      window.open(depositRes.data, "_blank");
      setDepositModal(false);
      setAmount(0);
      setDesc("");
      Modal.success({
        title: 'Deposit Link Created',
        content: (
          <div>
            <p>Click <a href={depositRes.data} target="_blank" rel="noopener noreferrer">here</a> to proceed to the payment page.</p>
            <p>After payment, your balance will be updated automatically.</p>
          </div>
        ),
        onOk: () => {
          setDepositModal(false);
          setAmount(0);
          setDesc("");
          fetchData();
        }
      });
    } catch {
      Modal.error({
        title: 'Deposit Failed',
        content: 'Could not create deposit link. Please try again later.'
      });
    }
    setActionLoading(false);
  };

  const handleWithdraw = async () => {
    if (!selectedPaymentMethod) {
      message.error("Vui lòng chọn tài khoản nhận tiền.");
      return;
    }
    setActionLoading(true);
    try {
      await requestWithdraw(
        amount,
        desc,
        selectedPaymentMethod,
        wallet?.walletId || wallet?.id,
        wallet?.userId || (wallet?.user && wallet.user.id)
      );
      setWithdrawModal(false);
      setAmount(0);
      setDesc("");
      setSelectedPaymentMethod(null);
      Modal.success({
        title: 'Withdrawal Request Sent',
        content: 'Your withdrawal request has been submitted and is pending admin approval.',
        onOk: () => {
          setWithdrawModal(false);
          setAmount(0);
          setDesc("");
          setSelectedPaymentMethod(null);
          fetchData();
        }
      });
    } catch {
      Modal.error({
        title: 'Withdrawal Failed',
        content: 'Could not request withdrawal. Please try again later.'
      });
    }
    setActionLoading(false);
  };


  // Popup xác nhận nạp tiền
  const DepositModal = (
    <Modal
      title="Add Funds"
      open={depositModal}
      onOk={handleDeposit}
      onCancel={() => setDepositModal(false)}
      confirmLoading={actionLoading}
      okText="Create Deposit Link"
    >
      <Input
        type="number"
        min={10000}
        step={10000}
        value={amount}
        onChange={e => setAmount(Number(e.target.value))}
        placeholder="Amount (VND)"
        style={{ marginBottom: 12 }}
      />
      <Input.TextArea
        value={desc}
        onChange={e => setDesc(e.target.value)}
        placeholder="Description (optional)"
        rows={2}
      />
      <div style={{ marginTop: 10, color: '#888', fontSize: 13 }}>
        Minimum deposit: 10,000 VND
      </div>
    </Modal>
  );

  // Popup xác nhận rút tiền
  const WithdrawModal = (
    <Modal
      title="Withdraw Funds"
      open={withdrawModal}
      onOk={handleWithdraw}
      onCancel={() => setWithdrawModal(false)}
      confirmLoading={actionLoading}
      okText="Send Withdrawal Request"
    >
      <Input
        type="number"
        min={10000}
        step={10000}
        value={amount}
        onChange={e => setAmount(Number(e.target.value))}
        placeholder="Amount (VND)"
        style={{ marginBottom: 12 }}
      />
      {/* Dropdown chọn phương thức thanh toán */}
      <div style={{ marginBottom: 12 }}>
        <label style={{ display: 'block', fontWeight: 500, marginBottom: 4 }}>Tài khoản nhận tiền</label>
        <select
          className="ant-input"
          value={selectedPaymentMethod || ''}
          onChange={e => setSelectedPaymentMethod(e.target.value)}
          style={{ width: '100%', padding: 8 }}
        >
          <option value="" disabled>Chọn tài khoản ngân hàng</option>
          {paymentMethods.map(pm => (
            <option key={pm.id} value={pm.id}>
              {pm.bankName} - ****{pm.accountNumber?.slice(-4)} ({pm.accountHolder})
            </option>
          ))}
        </select>
        {paymentMethods.length === 0 && (
          <div style={{ color: '#888', fontSize: 13, marginTop: 4 }}>Bạn chưa liên kết tài khoản ngân hàng nào.</div>
        )}
      </div>
      <Input.TextArea
        value={desc}
        onChange={e => setDesc(e.target.value)}
        placeholder="Description (optional)"
        rows={2}
      />
      <div style={{ marginTop: 10, color: '#888', fontSize: 13 }}>
        Minimum withdrawal: 10,000 VND
      </div>
    </Modal>
  );

  if (wallet === null && !loading) {
    return (
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 400 }}>
        <Title level={3}>Bạn chưa có ví ShareDoo</Title>
        <Paragraph>Hãy tạo ví để bắt đầu sử dụng các tính năng tài chính trên ShareDoo.</Paragraph>
        <Button
          type="primary"
          size="large"
          style={{ borderRadius: 12, marginTop: 16 }}
          onClick={async () => {
            try {
              await createWallet();
              message.success('Tạo ví thành công!');
              fetchData();
            } catch {
              message.error('Không thể tạo ví. Vui lòng thử lại.');
            }
          }}
        >
          Tạo ví ngay
        </Button>
      </div>
    );
  }

  return (
    <div style={{ width: "100%", position: "relative" }}>
      {DepositModal}
      {WithdrawModal}
      <Row gutter={[16, 16]} style={{ marginTop: 65, marginLeft: 20 }}>
        <Col span={24}>
          <Title level={2}>My Wallet</Title>
          <Paragraph>
            Manage your earnings, payments, and financial transactions
          </Paragraph>
        </Col>
        <Col span={24}>
          <Card style={{ backgroundColor: "#e3d5be", borderRadius: "16px" }}>
            <Row align="middle">
              <Col>
                <DollarCircleOutlined
                  style={{ fontSize: 52, color: "#a1bfa7" }}
                />
              </Col>
              <Col style={{ marginLeft: 16 }}>
                <Title level={4}>Why Use ShareDoo Wallet?</Title>
                <Paragraph>
                  Easily manage your money, receive rental income, and transfer
                  to any bank account securely. Track all your transactions in
                  one place and get paid instantly.
                </Paragraph>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false} style={{ borderRadius: "16px", boxShadow: "0px 1px 2px #0000000d" }}>
            <Title level={4}>Current Balance</Title>
            <Space>
              <Text strong style={{ fontSize: 24 }}>
                ${wallet?.balance?.toFixed(2) ?? "0.00"}
              </Text>
              <Image src="https://c.animaapp.com/kNAtk3lJ/img/vector-1.svg" preview={false} />
            </Space>
            <Text type="secondary">Available for withdrawal</Text>
            <div style={{ marginTop: 20, display: 'flex', gap: 12, justifyContent: 'center' }}>
              <Button
                type="primary"
                icon={<ArrowDownOutlined />}
                style={{ borderRadius: 12, background: '#52c41a', borderColor: '#52c41a', fontWeight: 600 }}
                onClick={() => setDepositModal(true)}
              >
                Nạp tiền
              </Button>
              <Button
                type="primary"
                icon={<ArrowUpOutlined />}
                style={{ borderRadius: 12, background: '#ff4d4f', borderColor: '#ff4d4f', fontWeight: 600 }}
                onClick={() => setWithdrawModal(true)}
              >
                Rút tiền
              </Button>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false} style={{ borderRadius: "16px", boxShadow: "0px 1px 2px #0000000d" }}>
            <Title level={4}>Total Earned</Title>
            <Space>
              <Text strong style={{ fontSize: 24, color: "#52c41a" }}>
                ${wallet?.totalEarned?.toFixed(2) ?? "0.00"}
              </Text>
              <Image src="https://c.animaapp.com/kNAtk3lJ/img/vector-2.svg" preview={false} />
            </Space>
            <Text type="secondary">From rentals this month</Text>
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false} style={{ borderRadius: "16px", boxShadow: "0px 1px 2px #0000000d" }}>
            <Title level={4}>Total Spent</Title>
            <Space>
              <Text strong style={{ fontSize: 24, color: "#ff4d4f" }}>
                ${wallet?.totalSpent?.toFixed(2) ?? "0.00"}
              </Text>
              <Image src="https://c.animaapp.com/kNAtk3lJ/img/vector-3.svg" preview={false} />
            </Space>
            <Text type="secondary">On rentals this month</Text>
          </Card>
        </Col>
        <Col span={24}>
          <Space>
            {/* <Button
              type="primary"
              icon={<ArrowUpOutlined />}
              style={{ borderRadius: "16px", backgroundColor: "#a1bfa7", borderColor: "#a1bfa7" }}
              onClick={() => setWithdrawModal(true)}
            >
              Withdraw Funds
            </Button>
            <Button
              type="default"
              icon={<ArrowDownOutlined />}
              style={{ borderRadius: "16px" }}
              onClick={() => setDepositModal(true)}
            >
              Add Funds
            </Button> */}
          </Space>
        </Col>
        <Col span={16}>
          <Card bordered={false} style={{ borderRadius: "16px", boxShadow: "0px 1px 2px #0000000d" }}>
            <Row justify="space-between" align="middle">
              <Col>
                <Title level={4}>Transaction History</Title>
              </Col>
            </Row>
            <div style={{ marginTop: 16, maxHeight: 400, overflowY: "auto" }}>
              {transactions.length === 0 ? (
                <Text>No transactions found.</Text>
              ) : (
                transactions.map((tx) => (
                  <Card
                    key={tx.id}
                    style={{ backgroundColor: "#f5f5f5", borderRadius: "16px", marginBottom: 16 }}
                  >
                    <Row align="middle">
                      <Col>
                        {tx.type === "DEPOSIT" ? (
                          <DollarCircleOutlined style={{ fontSize: 40, color: "#52c41a" }} />
                        ) : tx.type === "WITHDRAW" ? (
                          <BankOutlined style={{ fontSize: 40, color: "#1890ff" }} />
                        ) : (
                          <DollarCircleOutlined style={{ fontSize: 40, color: "#ff4d4f" }} />
                        )}
                      </Col>
                      <Col style={{ marginLeft: 16 }}>
                        <Title level={5}>{tx.description}</Title>
                        <Text type="secondary">{new Date(tx.createdAt).toLocaleString()}</Text>
                        <div style={{ marginTop: 6 }}>
                          <Tag color={tx.status === 'SUCCESS' ? 'green' : 'red'}>
                            {tx.status}
                          </Tag>
                        </div>
                      </Col>
                      <Col style={{ marginLeft: "auto" }}>
                        <Text strong style={{ color: tx.type === "DEPOSIT" ? "#52c41a" : tx.type === "WITHDRAW" ? "#1890ff" : "#ff4d4f" }}>
                          {tx.type === "DEPOSIT" ? "+" : "-"}${tx.amount.toFixed(2)}
                        </Text>
                      </Col>
                    </Row>
                  </Card>
                ))
              )}
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card bordered={false} style={{ borderRadius: "16px", boxShadow: "0px 1px 2px #0000000d" }}>
            <Title level={4}>Linked Bank Account</Title>
            {paymentMethods.length === 0 ? (
              <Card style={{ background: '#e3d5be', borderRadius: 16, marginBottom: 12 }}>
                <Text type="secondary">No linked bank account.</Text>
              </Card>
            ) : (
              <Space direction="vertical" style={{ width: '100%' }}>
                {paymentMethods.map(pm => (
                  <Card key={pm.id} style={{ background: '#e3d5be', borderRadius: 16, marginBottom: 12 }}>
                    <Row align="middle">
                      <Col>
                        <BankOutlined style={{ fontSize: 40, color: '#1890ff' }} />
                      </Col>
                      <Col style={{ marginLeft: 16 }}>
                        <Title level={5} style={{ margin: 0 }}>{pm.bankName}</Title>
                        <Text>{pm.accountNumber ? `****${pm.accountNumber.slice(-4)}` : ''}</Text>
                        <div><Text type="secondary">{pm.accountHolder}</Text></div>
                      </Col>
                      <Col style={{ marginLeft: 'auto' }}>
                        <CheckCircleOutlined style={{ fontSize: 24, color: '#52c41a' }} />
                        <Text style={{ color: '#52c41a', marginLeft: 6 }}>Verified</Text>
                      </Col>
                    </Row>
                  </Card>
                ))}
              </Space>
            )}
            <Button
              type="primary"
              style={{
                borderRadius: 16,
                marginBottom: 16,
                backgroundColor: '#a1bfa7',
                borderColor: '#a1bfa7',
                fontWeight: 600,
              }}
            >
              Update Account
            </Button>
            <Button
              type="default"
              style={{ borderRadius: 16, marginBottom: 16, fontWeight: 600 }}
              onClick={() => setLinkAccountModal(true)}
              data-testid="link-new-account-btn"
            >
              Link New Account
            </Button>
            <Card style={{ background: '#e6f7ff', borderRadius: 16 }}>
              <Row align="middle">
                <Col>
                  <LockOutlined style={{ fontSize: 40, color: '#1890ff' }} />
                </Col>
                <Col style={{ marginLeft: 16 }}>
                  <Title level={5} style={{ margin: 0 }}>Secure & Protected</Title>
                  <Text>
                    Your bank information is encrypted and protected by industry-standard security measures.
                  </Text>
                </Col>
              </Row>
            </Card>
          </Card>
        </Col>
      </Row>
      {/* Danh sách tài khoản ngân hàng đã liên kết */}
      {linkAccountModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.3)',
          zIndex: 10000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            background: '#fff',
            borderRadius: 16,
            padding: 32,
            minWidth: 350,
            boxShadow: '0 4px 32px rgba(0,0,0,0.15)',
            position: 'relative',
          }}>
            <Title level={4} style={{ marginBottom: 16 }}>Liên kết tài khoản ngân hàng</Title>
            <Input
              placeholder="Tên ngân hàng"
              value={bankName}
              onChange={e => setBankName(e.target.value)}
              style={{ marginBottom: 12 }}
              disabled={addBankLoading}
            />
            <Input
              placeholder="Số tài khoản"
              value={accountNumber}
              onChange={e => setAccountNumber(e.target.value)}
              style={{ marginBottom: 12 }}
              disabled={addBankLoading}
            />
            <Input
              placeholder="Chủ tài khoản"
              value={accountHolder}
              onChange={e => setAccountHolder(e.target.value)}
              style={{ marginBottom: 20 }}
              disabled={addBankLoading}
            />
            <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
              <Button onClick={() => setLinkAccountModal(false)} disabled={addBankLoading}>
                Hủy
              </Button>
              <Button type="primary" loading={addBankLoading} onClick={handleAddBank}>
                Xác nhận
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default WalletMainSection;
