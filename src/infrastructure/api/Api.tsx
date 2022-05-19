import axios from "axios";

import { HTTP_STATUS } from "../constants/http-status";

axios.interceptors.response.use((response) => {
	if (response.status !== HTTP_STATUS.HTTP_NOCONTENT_STATUS) {
		return response.data;
	}

	return response;
});

const get = async <T,>(endpoint: string): Promise<T> => {
	return axios.get(`${process.env.REACT_APP_API_URL}/${endpoint}`);
};

const Api = {
	get
};

export default Api;
