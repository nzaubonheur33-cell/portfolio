import api from './api';

export const loginAdmin = async (email, password) => {
  const response = await api.post('/api/auth/login', { email, password });
  return response.data;
};

export const getMe = async () => {
  const response = await api.get('/api/auth/me');
  return response.data;
};

export const logoutAdmin = () => {
  localStorage.removeItem('admin_token');
};
