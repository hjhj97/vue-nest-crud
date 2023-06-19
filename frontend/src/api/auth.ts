import axios from '@/plugins/axiosSetup';

export const signIn = async (data: { name: string; password: string }) => {
	const res = await axios.post('/auth/signin', data);
	return res;
};
