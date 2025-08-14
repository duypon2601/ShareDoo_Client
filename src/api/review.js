import axios from 'axios';

export const createReview = (data) => {
  const token = localStorage.getItem('token');
  return axios.post('/api/reviews', data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const getReviewsByProduct = (productId) => {
  return axios.get(`/api/reviews/product/${productId}`);
};

export const getReviewsByReviewer = (reviewerId) => {
  return axios.get(`/api/reviews/reviewer/${reviewerId}`);
};
