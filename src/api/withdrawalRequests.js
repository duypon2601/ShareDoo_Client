import axios from 'axios';

export const getWithdrawalRequests = () => {
  const token = localStorage.getItem('token');
  return axios.get('/api/withdrawals/all', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
