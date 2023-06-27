import { ActionType } from "../action-types";
import type { ProjectType, ErrorType } from "../../types";

export interface GetProjectStartAction {
	type: ActionType.GET_PROJECT_START;
}

export interface GetProjectSuccessAction {
	type: ActionType.GET_PROJECT_SUCCESS;
	payload: ProjectType[];
}

export interface GetProjectErrorAction {
	type: ActionType.GET_PROJECT_ERROR;
	payload: ErrorType;
}

export interface GetProjectTasksStartAction {
	type: ActionType.GET_PROJECT_TASKS_START;
}

export interface GetProjectTasksSuccessAction {
	type: ActionType.GET_PROJECT_TASKS_SUCCESS;
	payload: TaskType[];
}

export interface GetProjectTasksErrorAction {
	type: ActionType.GET_PROJECT_TASKS_ERROR;
	payload: ErrorType;
}

export interface CreateProjectTaskStartAction {
	type: ActionType.CREATE_PROJECT_TASK_START;
}

export interface CreateProjectTaskSuccessAction {
	type: ActionType.CREATE_PROJECT_TASK_SUCCESS;
}

export interface CreateProjectTaskErrorAction {
	type: ActionType.CREATE_PROJECT_TASK_ERROR;
}

export interface SetProjectAction {
	type: ActionType.SET_PROJECT;
	payload: ProjectType;
}

export type ProjectAction =
	| GetProjectStartAction
	| GetProjectErrorAction
	| GetProjectSuccessAction
	| GetProjectTasksStartAction
	| GetProjectTasksSuccessAction
	| GetProjectTasksErrorAction
	| CreateProjectTaskErrorAction
	| CreateProjectTaskStartAction
	| CreateProjectTaskSuccessAction
	| SetProjectAction;
