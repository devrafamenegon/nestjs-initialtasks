import api from './index';

export const getAll = async() => await api.get('/tasks');

export const getById = async(id) => await api.get('/tasks/' + id);

export const create = async(task) => await api.post('/tasks', { task });

export const createProduct = async(
  task
) => await api.post('/tasks', { task });

export const updateProduct = async(
  task
) => await api.put('/tasks/' + id, {task})