import axios from '@/plugins/axiosSetup';
import { AxiosResponse } from 'axios';

export default function useAxios() {
	function postData(
		url: string,
		payload: any,
		callback: (v: any) => any,
		failCallback: (v: any) => any,
	) {
		axios
			.post(url, payload, {})
			.then((res: AxiosResponse) => {
				const responseData = res.data;
				if (responseData) {
					if (responseData.success) {
						callback(res.data);
					} else if (responseData.error) {
						if (failCallback) {
							failCallback(res.data.error);
						} else {
							console.error('Unexpected Error');
						}
					}
				} else {
					alert('Fail to Post');
				}
			})
			// 서버와 통신자체가 실패한 상태
			.catch((error) => {
				console.error(error);
			});
	}

	function fetchData(
		url: string,
		params: any,
		callback: (v: any) => any,
		failCallback: (v: any) => any,
	) {
		axios
			.get(url, {
				params: params,
			})
			.then((res: AxiosResponse) => {
				const responseData = res.data;
				if (responseData) {
					if (responseData.success) {
						callback(res.data);
					} else if (responseData.error) {
						if (failCallback) {
							failCallback(res.data.error);
						} else {
							console.error('Unexpected Error');
						}
					}
				} else {
					alert('Fail to Fetch');
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return {
		postData,
		fetchData,
	};
}
