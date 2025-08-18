import api from '../components/config/axios';

export const createReview = (data, orderCode) => {
  const token = localStorage.getItem('token');
  return api.post(`/api/reviews?orderCode=${orderCode}`, data, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const getReviewsByProduct = (productId) => {
  const token = localStorage.getItem('token');
  return api.get(`/api/reviews/product/${productId}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

export const getReviewsByReviewer = (reviewerId) => {
  return api.get(`/api/reviews/reviewer/${reviewerId}`);
};
