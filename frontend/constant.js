// constants.js


export const NODE_ENV = '';

export const BASE_API = NODE_ENV === 'development' ? "http://localhost:4444" : "https://addiscafe-backend.onrender.com";

export const STRIPE_REDIRECT_URL = NODE_ENV === 'development' ? "http://localhost:5173" : "https://addiscafe-vkvw.onrender.com/";

