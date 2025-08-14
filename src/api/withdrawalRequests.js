import axios from 'axios';

export const getWithdrawalRequests = () => {
  const token = localStorage.getItem('token');
  return axios.get('/api/withdrawals/all', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const approveWithdrawal = (requestId) => {
  const token = localStorage.getItem('token');
  return axios.post('/api/withdrawals/approve', null, {
    params: { requestId },
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const rejectWithdrawal = (requestId) => {
  const token = localStorage.getItem('token');
  return axios.post('/api/withdrawals/reject', null, {
    params: { requestId },
    headers: { Authorization: `Bearer ${token}` }
  });
};
