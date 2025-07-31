// Types for wallet API responses

/**
 * @typedef {Object} WalletDTO
 * @property {number} walletId
 * @property {number} balance
 * @property {number} totalEarned
 * @property {number} totalSpent
 * ... // add more fields as needed
 */

/**
 * @typedef {Object} WalletTransactionDTO
 * @property {number} id
 * @property {string} type
 * @property {number} amount
 * @property {string} description
 * @property {string} createdAt
 * ... // add more fields as needed
 */
