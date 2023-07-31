import axios from 'axios';

// API Config
const backend = process.env.REACT_APP_BACKEND_URI;

// console.log(`BACKEND API URL ${backend}/items`);

const api = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: backend
});

api.interceptors.request.use((request) => {
  console.log('Starting Request', request.url)
  return request
})

// Interceptor for logging URLs
api.interceptors.request.use(
  config => {
    console.log(config.url);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export const getItems = () => api.get('/items');
export const createItem = (payload) => api.post('/items', payload);
export const deleteItem = (id) => api.delete(`/items/${id}`);

const apis = {
  getItems,
  createItem,
  deleteItem,
};

export default apis;
