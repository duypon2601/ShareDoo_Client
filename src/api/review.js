import axios from 'axios';

export const createReview = (data, orderCode) => {
  const token = localStorage.getItem('token');
  return axios.post(`/api/reviews?orderCode=${orderCode}`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const getReviewsByProduct = (productId) => {
  const token = localStorage.getItem('token');
  return axios.get(`/api/reviews/product/${productId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const getReviewsByReviewer = (reviewerId) => {
  return axios.get(`/api/reviews/reviewer/${reviewerId}`);
};
