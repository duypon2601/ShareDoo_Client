import axios from 'axios';

export const getWalletInfo = () => {
  const token = localStorage.getItem('token');
  return axios.get('/api/wallet/me', {
    headers: { Authorization: `Bearer ${token}` }
  });
};
export const getWalletTransactions = () => {
  const token = localStorage.getItem('token');
  return axios.get('/api/wallet/transactions', {
    headers: { Authorization: `Bearer ${token}` }
  });
};

// Tạo link nạp tiền vào ví (dành riêng cho ví)
export const createDepositWalletLink = (amount, description) => {
  const token = localStorage.getItem('token');
  return axios.post('/api/wallet/deposit-link-wallet', null, {
    params: { amount, description },
    headers: { Authorization: `Bearer ${token}` }
  });
};

// Cộng tiền vào ví cho user nhận tiền (credit-by-ordercode)
export const creditByOrderCode = ({ orderCode, status, amount, receiverUserId }) => {
  const token = localStorage.getItem('token');
  return axios.post('/api/wallet/credit-by-ordercode', { orderCode, status, amount, receiverUserId }, {
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const requestWithdraw = (amount, description) => {
  const token = localStorage.getItem('token');
  return axios.post('/api/wallet/withdraw', null, {
    params: { amount, description },
    headers: { Authorization: `Bearer ${token}` }
  });
};

// Tạo ví cho user hiện tại
export const createWallet = () => {
  const token = localStorage.getItem('token');
  return axios.post('/api/wallet/create', null, {
    headers: { Authorization: `Bearer ${token}` }
  });
};
