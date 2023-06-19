import axios from '@/plugins/axiosSetup';

export const getMyTodos = async () => {
	return await axios.get('/todo');
};
