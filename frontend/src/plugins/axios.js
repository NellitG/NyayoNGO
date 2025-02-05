import axios from 'axios';

// Create an Axios instance
const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // Base URL for all requests
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;