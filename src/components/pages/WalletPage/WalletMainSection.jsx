import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  BankOutlined,
  CheckCircleOutlined,
  DollarCircleOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Image, Row, Space, Typography, message, Spin, Modal, Input } from "antd";
import React, { useEffect, useState } from "react";
import { getWalletInfo, getWalletTransactions, createDepositLink, requestWithdraw } from "../../../api/wallet";

const { Title, Text, Paragraph } = Typography;

const WalletMainSection = () => {
  const [wallet, setWallet] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [depositModal, setDepositModal] = useState(false);
  const [withdrawModal, setWithdrawModal] = useState(false);
  const [amount, setAmount] = useState(0);
  const [desc, setDesc] = useState("");
  const [actionLoading, setActionLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

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
        getWalletInfo(),
        getWalletTransactions(),
      ]);
      setWallet(walletRes.data);
      setTransactions(Array.isArray(txRes.data) ? txRes.data : []);
    } catch (err) {
      message.error("Failed to load wallet info");
    }
    setLoading(false);
  };

  const handleDeposit = async () => {
    setActionLoading(true);
    try {
      const res = await createDepositLink(amount, desc);
      window.open(res.data, "_blank");
      setDepositModal(false);
      setAmount(0);
      setDesc("");
      message.success("Redirected to payment page");
    } catch (err) {
      message.error("Failed to create deposit link");
    }
    setActionLoading(false);
  };

  const handleWithdraw = async () => {
    setActionLoading(true);
    try {
      await requestWithdraw(amount, desc);
      setWithdrawModal(false);
      setAmount(0);
      setDesc("");
      message.success("Withdrawal request sent");
      fetchData();
    } catch (err) {
      message.error("Failed to request withdrawal");
    }
    setActionLoading(false);
  };

  if (loading) {
    return <Spin size="large" style={{ margin: 40 }} />;
  }

  return (
    <div style={{ width: "100%", position: "relative" }}>
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
            <Button
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
            </Button>
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
          <Card
            bordered={false}
            style={{ borderRadius: "16px", boxShadow: "0px 1px 2px #0000000d" }}
          >
            <Title level={4}>Linked Bank Account</Title>
            <Card
              style={{
                backgroundColor: "#e3d5be",
                borderRadius: "16px",
                marginBottom: 16,
              }}
            >
              <Row align="middle">
                <Col>
                  <BankOutlined style={{ fontSize: 40, color: "#1890ff" }} />
                </Col>
                <Col style={{ marginLeft: 16 }}>
                  <Title level={5}>Chase Bank</Title>
                  <Text>****1234</Text>
                </Col>
                <Col style={{ marginLeft: "auto" }}>
                  <CheckCircleOutlined
                    style={{ fontSize: 24, color: "#52c41a" }}
                  />
                  <Text style={{ color: "#52c41a" }}>Verified</Text>
                </Col>
              </Row>
            </Card>
            <Button
              type="primary"
              style={{
                borderRadius: "16px",
                marginBottom: 16,
                backgroundColor: "#a1bfa7",
                borderColor: "#a1bfa7",
              }}
            >
              Update Account
            </Button>
            <Button
              type="default"
              style={{ borderRadius: "16px", marginBottom: 16 }}
            >
              Link New Account
            </Button>
            <Card style={{ backgroundColor: "#e6f7ff", borderRadius: "16px" }}>
              <Row align="middle">
                <Col>
                  <LockOutlined style={{ fontSize: 40, color: "#1890ff" }} />
                </Col>
                <Col style={{ marginLeft: 16 }}>
                  <Title level={5}>Secure & Protected</Title>
                  <Text>
                    Your bank information is encrypted and protected by industry-standard security measures.
                  </Text>
                </Col>
              </Row>
            </Card>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default WalletMainSection;