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
	SET_CURRENT_TASK = "SET_CURRENT_TASK",
	UPDATE_PROJECT_TASK = "UPDATE_PROJECT_TASK",
	SET_PROJECT_TASK_STATUSES = "SET_PROJECT_TASK_STATUSES",
	REORDER_PROJECT_TASKS = "REORDER_PROJECT_TASKS",
	UPDATE_PROJECT_TASK_STATUS = "UPDATE_PROJECT_TASK_STATUS",
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
