export const addAuthToken = (options) => {
	const token = localStorage.getItem("token");
	if (token) {
		return {
			...options,
			headers: {
				...options.headers,
				"x-auth-token": token,
			},
		};
	}
	return options;
};
