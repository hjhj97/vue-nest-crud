import axios from '@/plugins/axiosSetup';

export const signIn = async (data: { name: string; password: string }) => {
	return await axios.post('/auth/signin', data).catch((fail) => {
		console.log(fail);
	});
};
