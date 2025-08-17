import api from '../components/config/axios';

export const getWithdrawalRequests = () => {
  const token = localStorage.getItem('token');
  return api.get('/api/withdrawals/all', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const approveWithdrawal = (requestId) => {
  const token = localStorage.getItem('token');
  return api.post('/api/withdrawals/approve', null, {
    params: { requestId },
    headers: { Authorization: `Bearer ${token}` }
  });
};

export const rejectWithdrawal = (requestId) => {
  const token = localStorage.getItem('token');
  return api.post('/api/withdrawals/reject', null, {
    params: { requestId },
    headers: { Authorization: `Bearer ${token}` }
  });
};
