import api from './api';

export const submitContactForm = async (data) => {
  const response = await api.post('/api/contact', data);
  return response.data;
};

export const getMessages = async () => {
  const response = await api.get('/api/contact');
  return response.data;
};

export const updateMessageStatus = async (id, status) => {
  const response = await api.put(`/api/contact/${id}`, { status });
  return response.data;
};

export const deleteMessage = async (id) => {
  const response = await api.delete(`/api/contact/${id}`);
  return response.data;
};
