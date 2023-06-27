import { ActionType } from "../action-types";
import { Action } from "../actions";
import { ErrorType, UserType } from "../../types";

export interface AuthState {
	currentUser: UserType | null;
}

export const initialState: AuthState = {
	currentUser: null,
};

const reducer = (
	// rome-ignore lint/style/useDefaultParameterLast: <explanation>
	state: AuthState = initialState,
	action: Action,
): AuthState => {
	switch (action.type) {
		case ActionType.SET_CURRENT_USER:
			return {
				...state,
				currentUser: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
