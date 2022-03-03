import axios from 'axios';

export const getUsers = async () => {
	return await axios.get('https://jsonplaceholder.typicode.com/users');
};
export const postUsers = async () => {
	return await axios.post('https://jsonplaceholder.typicode.com/users');
};
export const deleteUsers = async (id) => {
	return await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
};

export const getDatails = async (id) => {
	return await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
};
