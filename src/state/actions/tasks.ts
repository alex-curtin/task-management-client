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

export interface UpdateProjectTaskAction {
	type: ActionType.UPDATE_PROJECT_TASK;
	payload: TaskType;
}

export interface ReorderProjectTasksAction {
	type: ActionType.REORDER_PROJECT_TASKS;
	payload: {
		prevIndex: number;
		newIndex: number;
		status: number;
	};
}

export interface UpdateProjectTaskStatusAction {
	type: ActionType.UPDATE_PROJECT_TASK_STATUS;
	payload: {
		prevStatus: number;
		newIndex: number;
		prevIndex: number;
		newIndex: number;
	};
}

export type TasksAction =
	| GetUserTasksStartAction
	| GetUserTasksSuccessAction
	| GetUserTasksErrorAction
	| SetUserTasksAction
	| SetProjectTasksAction
	| SetCurrentTaskAction
	| UpdateProjectTaskAction
	| ReorderProjectTasksAction
	| UpdateProjectTaskStatusAction;
