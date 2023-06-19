import axios from '@/plugins/axiosSetup';

export const getMyTodos = async () => {
	return await axios.get('/todo');
};
export const createTodo = async (title: string) => {
	return await axios.post('/todo', { title });
};
export const deleteTodo = async (id: number) => {
	return await axios.delete(`/todo/${id}`);
};
