import api from './index';

export const getAll = async() => await api.get('/tasks');

export const getById = async(_id) => await api.get('/tasks/' + _id);

export const createTask = async(description, completed) => {await api.post('/tasks', {description,completed})}

export const updateTask = async(_id, description, completed) => await api.put('/tasks/' + _id, {description,completed})

export const deleteTask = async(_id) => await api.delete('/tasks/' + _id)