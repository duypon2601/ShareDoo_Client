import axios from 'axios';

export const getCurrentUser = () => {
  const token = localStorage.getItem('token');
  return axios.get('/api/users/me', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const updateUser = (userId, data) => {
  const token = localStorage.getItem('token');
  return axios.put(`/api/users/${userId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
