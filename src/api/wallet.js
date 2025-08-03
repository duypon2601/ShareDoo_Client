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
export const createDepositLink = (amount, description) => {
  const token = localStorage.getItem('token');
  return axios.post('/api/wallet/deposit-link', null, {
    params: { amount, description },
    headers: { Authorization: `Bearer ${token}` }
  });
};
export const depositByOrderCode = ({ orderCode, status, amount }) => {
  const token = localStorage.getItem('token');
  return axios.post('/api/wallet/deposit-by-ordercode', { orderCode, status, amount }, {
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
