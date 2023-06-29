import { ActionType } from "../action-types";
import { TaskType, ErrorType, TaskDetailsType } from "../../types";

export interface GetUserTasksStartAction {
	type: ActionType.GET_PROJECT_TASKS_START;
}

export interface GetUserTasksSuccessAction {
	type: ActionType.GET_PROJECT_TASKS_SUCCESS;
	payload: TaskType[];
}

export interface GetUserTasksErrorAction {
	type: ActionType.GET_PROJECT_TASKS_ERROR;
	payload: ErrorType;
}

export interface SetUserTasksAction {
	type: ActionType.SET_USER_TASKS;
	payload: TaskType[];
}

export interface SetProjectTasksAction {
	type: ActionType.SET_PROJECT_TASKS;
	payload: TaskType[];
}

export interface SetCurrentTaskAction {
	type: ActionType.SET_CURRENT_TASK;
	payload: TaskDetailsType;
}

export type TasksAction =
	| GetUserTasksStartAction
	| GetUserTasksSuccessAction
	| GetUserTasksErrorAction
	| SetUserTasksAction
	| SetProjectTasksAction
	| SetCurrentTaskAction;
