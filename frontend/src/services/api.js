import axios from 'axios';

// Dynamic base URL based on environment
const baseURL = 'http://localhost:3000';

export const apiClient = axios.create({ baseURL });

export const getEvents = () => apiClient.get('/api/events');
export const getGallery = () => apiClient.get('/api/gallery');