import api from './api';

export const getProjects = async () => {
  const response = await api.get('/api/projects');
  return response.data;
};

export const getProjectById = async (id) => {
  const response = await api.get(`/api/projects/${id}`);
  return response.data;
};

export const createProject = async (data) => {
  const response = await api.post('/api/projects', data);
  return response.data;
};

export const updateProject = async (id, data) => {
  const response = await api.put(`/api/projects/${id}`, data);
  return response.data;
};

export const deleteProject = async (id) => {
  const response = await api.delete(`/api/projects/${id}`);
  return response.data;
};
