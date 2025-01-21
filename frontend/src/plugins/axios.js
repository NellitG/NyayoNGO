import axios from 'axios';

// Create an Axios instance
const apiClient = axios.create({
  baseURL: 'http://localhost:3000', // Base URL for all requests
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;