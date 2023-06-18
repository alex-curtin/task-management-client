import { ActionType } from "../action-types";
import type { Project, ErrorType } from "../types";

export interface GetProjectsStartAction {
	type: ActionType.GET_PROJECTS_START;
}

export interface GetProjectsSuccessAction {
	type: ActionType.GET_PROJECTS_SUCCESS;
	payload: Project[];
}

export interface GetProjectsErrorAction {
	type: ActionType.GET_PROJECTS_ERROR;
	payload: ErrorType[];
}

export type ProjectAction =
	| GetProjectsStartAction
	| GetProjectsErrorAction
	| GetProjectsSuccessAction;
