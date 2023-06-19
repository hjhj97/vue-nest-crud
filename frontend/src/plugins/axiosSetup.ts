import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';

axios.interceptors.request.use(
	// interceptor를 통해 백엔드 API로부터 받은 값을 먼저 처리함
	(response: InternalAxiosRequestConfig) => {
		return response;
	},
	(error: AxiosError) => {
		// 2xx 외의 범위에 있는 상태코드는 여기에서 실행됨
		return error;
	},
);

axios.interceptors.response.use(
	// interceptor를 통해 백엔드 API로부터 받은 값을 먼저 처리함
	(response: AxiosResponse) => {
		// 2xx 범위에 있는 상태코드는 여기에서 실행됨
		console.log(response);
		const responseData = response.data;
		if (!responseData.success) {
			const errorMsg = responseData.message;
			throw new Error(errorMsg);
		} else {
			return responseData.data;
		}
	},
	(error: AxiosError) => {
		const errorMsg = (error.response!.data as any)?.message ?? 'Error';
		throw new Error(errorMsg);
	},
);

export default axios;
