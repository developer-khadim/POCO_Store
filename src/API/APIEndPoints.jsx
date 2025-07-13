// API Configuration
const BASE_URL = "http://localhost:5000/api";

// API Endpoints
export const APIEndPoints = {
  // Authentication endpoints
  auth: {
    login: `${BASE_URL}/users/login`,
    register: `${BASE_URL}/users/register`,
    logout: `${BASE_URL}/users/logout`,
    refreshToken: `${BASE_URL}/users/refresh-token`,
    forgotPassword: `${BASE_URL}/users/forgot-password`,
    resetPassword: `${BASE_URL}/users/reset-password`,
    verifyEmail: `${BASE_URL}/users/verify-email`,
  },

//   // User endpoints
//   user: {
//     profile: `${BASE_URL}/users/profile`,
//     updateProfile: `${BASE_URL}/users/profile`,
//     deleteAccount: `${BASE_URL}/users/account`,
//     changePassword: `${BASE_URL}/users/change-password`,
//   },

//   // Product endpoints
//   products: {
//     getAll: `${BASE_URL}/products`,
//     getById: (id) => `${BASE_URL}/products/${id}`,
//     create: `${BASE_URL}/products`,
//     update: (id) => `${BASE_URL}/products/${id}`,
//     delete: (id) => `${BASE_URL}/products/${id}`,
//     search: `${BASE_URL}/products/search`,
//     categories: `${BASE_URL}/products/categories`,
//   },

//   // Order endpoints
//   orders: {
//     getAll: `${BASE_URL}/orders`,
//     getById: (id) => `${BASE_URL}/orders/${id}`,
//     create: `${BASE_URL}/orders`,
//     update: (id) => `${BASE_URL}/orders/${id}`,
//     cancel: (id) => `${BASE_URL}/orders/${id}/cancel`,
//     history: `${BASE_URL}/orders/history`,
//   },

//   // Cart endpoints
//   cart: {
//     get: `${BASE_URL}/cart`,
//     add: `${BASE_URL}/cart/add`,
//     update: `${BASE_URL}/cart/update`,
//     remove: `${BASE_URL}/cart/remove`,
//     clear: `${BASE_URL}/cart/clear`,
//   },
};

// Alternative export for backward compatibility
export const AUTH_ENDPOINTS = APIEndPoints.auth;
// export const USER_ENDPOINTS = APIEndPoints.user;
// export const PRODUCT_ENDPOINTS = APIEndPoints.products;
// export const ORDER_ENDPOINTS = APIEndPoints.orders;
// export const CART_ENDPOINTS = APIEndPoints.cart;