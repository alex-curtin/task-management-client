import { ActionType } from "../action-types";
import { Action } from "../actions";
import { ErrorType, UserType } from "../../types";

interface ErrorState {
	creatingProjectTask: ErrorType | null;
	fetchingAllProjects: ErrorType | null;
	fetchingCurrentUser: ErrorType | null;
	fetchingProject: ErrorType | null;
	fetchingUserProjects: ErrorType | null;
	fetchingUserTasks: ErrorType | null;
	signingInUser: ErrorType | null;
}

const initialState: ErrorState = {
	creatingProjectTask: null,
	fetchingAllProjects: null,
	fetchingCurrentUser: null,
	fetchingProject: null,
	fetchingUserProjects: null,
	fetchingUserTasks: null,
	signingInUser: null,
};

const reducer = (
	// rome-ignore lint/style/useDefaultParameterLast: <explanation>
	state: ErrorState = initialState,
	action: Action,
): ErrorState => {
	switch (action.type) {
		case ActionType.REQUEST_START:
			return {
				...state,
				[action.payload.key]: null,
			};
		case ActionType.REQUEST_ERROR:
			return {
				...state,
				[action.payload.key]: action.payload.error,
			};
		default:
			return state;
	}
};

export default reducer;
