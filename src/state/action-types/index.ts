export enum ActionType {
	SET_CURRENT_USER = "SET_CURRENT_USER",
	SET_ALL_PROJECTS = "SET_ALL_PROJECTS",
	SET_USER_PROJECTS = "SET_USER_PROJECTS",
	SET_USER_TASKS = "SET_USER_TASKS",
	SET_PROJECT = "SET_PROJECT",
	SET_PROJECT_TASKS = "SET_PROJECT_TASKS",
	REQUEST_START = "REQUEST_START",
	REQUEST_COMPLETE = "REQUEST_COMPLETE",
	REQUEST_ERROR = "REQUEST_ERROR",
	ADD_PROJECT_TASK = "ADD_PROJECT_TASK",
}

export const RequestActionType = {
	creatingProjectTask: "creatingProjectTask",
	fetchingAllProjects: "fetchingAllProjects",
	etchingCurrentUser: "fetchingCurrentUser",
	fetchingProject: "fetchingProject",
	fetchingUserProject: "fetchingUserProjects",
	fetchingUserTasks: "fetchingUserTasks",
	signingInUser: "signingInUser",
};
