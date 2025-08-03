import axios from 'axios';

export const depositByOrderCode = ({ orderCode, status, amount }) => {
  const token = localStorage.getItem('token');
  return axios.post('/api/wallet/deposit-by-ordercode', { orderCode, status, amount }, {
    headers: { Authorization: `Bearer ${token}` }
  });
};
