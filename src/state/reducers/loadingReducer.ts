import { ActionType } from "../action-types";
import { Action } from "../actions";

interface LoadingState {
	creatingProjectTask: boolean;
	fetchingAllProjects: boolean;
	fetchingCurrentUser: boolean;
	fetchingProject: boolean;
	fetchingUserProjects: boolean;
	fetchingUserTasks: boolean;
	signingInUser: boolean;
}

const initialState: LoadingState = {
	creatingProjectTask: false,
	fetchingAllProjects: false,
	fetchingCurrentUser: false,
	fetchingProject: false,
	fetchingUserProjects: false,
	fetchingUserTasks: false,
	signingInUser: false,
};

// rome-ignore lint/style/useDefaultParameterLast: <explanation>
const reducer = (state = initialState, action: Action): LoadingState => {
	switch (action.type) {
		case ActionType.REQUEST_START:
			return {
				...state,
				[action.payload]: true,
			};
		case ActionType.REQUEST_COMPLETE:
			return {
				...state,
				[action.payload]: false,
			};
		default:
			return state;
	}
};

export default reducer;
