import axios from "axios";

import { BASE_URL } from "../constants";
import { ProjectType, TaskDetailsType, TaskType, UserType } from "../types";

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";

const setAuthToken = (token: string): void => {
	if (token) {
		axios.defaults.headers.common["x-auth-token"] = token;
	} else {
		// rome-ignore lint/performance/noDelete: <explanation>
		delete axios.defaults.headers.common["x-auth-token"];
	}
};

export const fetchCurrentUser = async (): UserType | null => {
	const token = localStorage.getItem("token");
	if (!token) {
		return null;
	}
	setAuthToken(token);
	try {
		const { data } = await axios.get("/auth/user/current");
		return data;
	} catch (error) {
		localStorage.removeItem("token");
		console.log(error);
	}
};

export const fetchAllUsers = async (): UserType[] => {
	const { data } = await axios.get("/users/all");
	return data;
};

export const signIn = async (body: UserType): UserType => {
	console.log("signing in", body);
	const { data } = await axios.post("/auth/signin", {
		...body,
	});
	const { token, user } = data || {};
	if (token) {
		localStorage.setItem("token", token);
		setAuthToken(token);
	}
	return user;
};

export const fetchAllProjects = async (): ProjectType[] => {
	const { data } = await axios.get("/projects/all");
	return data;
};

export const fetchUserProjects = async (): ProjectType[] => {
	const { data } = await axios.get("/projects/currentUser");
	return data;
};

export const fetchProject = async (
	projectId: number,
): { project: ProjectType; tasks: TaskType[] } => {
	const { data } = await axios.get(`/projects/projectId/${projectId}`);
	return data;
};

export const fetchCurrentUserTasks = async (): TaskType[] => {
	const { data } = await axios.get("/tasks/currentUser");
	return data;
};

export const createProjectTask = async (body: TaskType): TaskType => {
	const { data } = await axios.post("/tasks/new", body);
	return data;
};

export const fetchTask = async (taskId: number): TaskDetailsType => {
	console.log("in api call", taskId);
	const { data } = await axios.get(`/tasks/id/${taskId}`);
	return data;
};
