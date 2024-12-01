import Axios from 'axios';

const axios = Axios.create({
	baseURL: import.meta.env.VITE_BACKEND_APP_URL + "/api",
	withCredentials: true,
	headers: {
		"Content-Type": "application/json",
		"Accept": "application/json",
	},
});

export default axios;
