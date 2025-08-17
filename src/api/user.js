import api from '../components/config/axios';

export const getCurrentUser = () => {
  const token = localStorage.getItem('token');
  return api.get('/api/users/me', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const updateUser = (userId, data) => {
  const token = localStorage.getItem('token');
  return api.put(`/api/users/${userId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
