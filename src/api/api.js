// api.js
import axios from 'axios';

const baseURL = 'https://backend.amraotech.com/Auth-api/';

const api = axios.create({
  baseURL,
});

// Function to set access and refresh tokens in local storage
export const setTokens = (accessToken, refreshToken) => {
  localStorage.setItem('access_token', accessToken);
  localStorage.setItem('refresh_token', refreshToken);
};

// Function to get the access token from local storage
export const getAccessToken = () => {
  return localStorage.getItem('access_token');
};

// Function to get the refresh token from local storage
export const getRefreshToken = () => {
  return localStorage.getItem('refresh_token');
};

// Function to clear tokens from local storage
export const clearTokens = () => {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
};

// Axios interceptor to add the access token to headers for each request
api.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Axios interceptor to handle token expiration or unauthorized requests
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    
    // If the request is unauthorized and there's a refresh token, try to refresh the access token
    if (error.response.status === 401 && !originalRequest._retry && getRefreshToken()) {
      originalRequest._retry = true;

      try {
        const response = await api.post('/refresh-token/', {
          refresh: getRefreshToken(),
        });

        const { access } = response.data;
        setTokens(access, getRefreshToken());

        // Retry the original request with the new access token
        return api(originalRequest);
      } catch (refreshError) {
        // If refresh token is also expired or refresh fails, log the user out
        clearTokens();
        window.location.href = '/logout'; // Redirect to logout or login page
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
