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

export type ProjectAction =
	| GetProjectStartAction
	| GetProjectErrorAction
	| GetProjectSuccessAction
	| GetProjectTasksStartAction
	| GetProjectTasksSuccessAction
	| GetProjectTasksErrorAction;
