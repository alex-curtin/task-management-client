import { ActionType } from "../action-types";
import { ErrorType } from "../types";

export interface SignInStartAction {
	type: ActionType.SIGN_IN_START;
}

export interface SignInSuccessAction {
	type: ActionType.SIGN_IN_SUCCESS;
	payload: {
		user: {
			id: number;
			username: string;
		};
	};
}

export interface SignInErrorAction {
	type: ActionType.SIGN_IN_ERROR;
	payload: ErrorType[];
}

export type AuthAction =
	| SignInStartAction
	| SignInErrorAction
	| SignInSuccessAction;
