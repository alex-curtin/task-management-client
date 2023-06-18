import { ActionType } from "../action-types";
import { Action } from "../actions";

interface Error {
	message: string;
}

interface AuthState {
	loading: boolean;
	errors: Error[] | null;
	currentUser: {
		id: number;
		username: string;
	} | null;
}

export const initialState: AuthState = {
	loading: false,
	errors: null,
	currentUser: null,
};

const reducer = (
	// rome-ignore lint/style/useDefaultParameterLast: <explanation>
	state: AuthState = initialState,
	action: Action,
): AuthState => {
	switch (action.type) {
		case ActionType.GET_CURRENT_USER_START:
		case ActionType.SIGN_IN_START:
			return {
				...state,
				loading: true,
			};
		case ActionType.GET_CURRENT_USER_SUCCESS:
		case ActionType.SIGN_IN_SUCCESS:
			return {
				...state,
				loading: false,
				currentUser: action.payload,
				errors: null,
			};
		case ActionType.GET_CURRENT_USER_ERROR:
		case ActionType.SIGN_IN_ERROR:
			return {
				...state,
				loading: false,
				currentUser: null,
				errors: action.payload,
			};
		case ActionType.GET_CURRENT_USER_FAIL:
			return {
				...state,
				loading: false,
			};
		default:
			return state;
	}
};

export default reducer;
