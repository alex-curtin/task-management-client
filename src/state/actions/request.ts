import { ErrorType } from "../../types";
import { ActionType } from "../action-types";

export type RequestType =
	| "creatingProjectTask"
	| "fetchingAllProjects"
	| "fetchingCurrentUser"
	| "fetchingProject"
	| "fetchingUserProjects"
	| "fetchingUserTasks"
	| "signingInUser";

export interface RequestStartAction {
	type: ActionType.REQUEST_START;
	payload: RequestType;
}

export interface RequestErrorAction {
	type: ActionType.REQUEST_ERROR;
	payload: {
		key: RequestType;
		error: ErrorType;
	};
}

export interface RequestCompleteAction {
	type: ActionType.REQUEST_COMPLETE;
	payload: RequestType;
}

export type RequestAction =
	| RequestStartAction
	| RequestCompleteAction
	| RequestErrorAction;
