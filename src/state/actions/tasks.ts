import { ActionType } from "../action-types";
import { TaskType, ErrorType } from "../../types";

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

export type TasksAction =
	| GetUserTasksStartAction
	| GetUserTasksSuccessAction
	| GetUserTasksErrorAction;
