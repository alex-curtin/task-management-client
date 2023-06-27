import { ActionType } from "../action-types";
import type { ProjectType, ErrorType } from "../../types";
import { setAllProjects } from "../action-creators";

export interface GetAllProjectsStartAction {
	type: ActionType.GET_ALL_PROJECTS_START;
}

export interface GetAllProjectsSuccessAction {
	type: ActionType.GET_ALL_PROJECTS_SUCCESS;
	payload: ProjectType[];
}

export interface GetAllProjectsErrorAction {
	type: ActionType.GET_ALL_PROJECTS_ERROR;
	payload: ErrorType;
}

export interface GetUserProjectsStartAction {
	type: ActionType.GET_USER_PROJECTS_START;
}

export interface GetUserProjectsSuccessAction {
	type: ActionType.GET_USER_PROJECTS_SUCCESS;
	payload: ProjectType[];
}

export interface GetUserProjectsErrorAction {
	type: ActionType.GET_USER_PROJECTS_ERROR;
	payload: ErrorType;
}

export interface SetUserProjectsAction {
	type: ActionType.SET_USER_PROJECTS;
	payload: ProjectType[];
}

export interface SetAllProjectsAction {
	type: ActionType.SET_ALL_PROJECTS;
	payload: ProjectType[];
}

export type ProjectsAction =
	| GetAllProjectsStartAction
	| GetAllProjectsSuccessAction
	| GetAllProjectsErrorAction
	| GetUserProjectsStartAction
	| GetUserProjectsSuccessAction
	| GetUserProjectsErrorAction
	| SetAllProjectsAction
	| SetUserProjectsAction;
