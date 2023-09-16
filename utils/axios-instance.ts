//Axios is used for API fetching
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api', // Assuming your Next.js API routes are under /api
  timeout: 5000, // 5 seconds timeout
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
