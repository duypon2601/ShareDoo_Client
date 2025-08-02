import axios from 'axios';

export const getWalletInfo = () => axios.get('/api/wallet/me', { withCredentials: true });
export const getWalletTransactions = () => axios.get('/api/wallet/transactions', { withCredentials: true });
export const createDepositLink = (amount, description) => axios.post('/api/wallet/deposit-link', null, { params: { amount, description }, withCredentials: true });
export const requestWithdraw = (amount, description) => axios.post('/api/wallet/withdraw', null, { params: { amount, description }, withCredentials: true });
