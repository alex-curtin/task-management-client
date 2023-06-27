import { ActionType } from "../action-types";
import { ErrorType, UserType } from "../../types";

export interface SignInStartAction {
	type: ActionType.SIGN_IN_START;
}

export interface SignInSuccessAction {
	type: ActionType.SIGN_IN_SUCCESS;
	payload: {
		user: UserType;
	};
}

export interface SignInErrorAction {
	type: ActionType.SIGN_IN_ERROR;
	payload: ErrorType;
}

export interface SetCurrentUserAction {
	type: ActionType.SET_CURRENT_USER;
	payload: UserType;
}

export type AuthAction =
	| SignInStartAction
	| SignInErrorAction
	| SignInSuccessAction
	| SetCurrentUserAction;
