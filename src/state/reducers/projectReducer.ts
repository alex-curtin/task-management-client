import { ActionType } from "../action-types";
import { Action } from "../actions";

import { Project, ErrorType } from "../types";

interface ProjectState {
	loading: boolean;
	error: string | null;
	projects: Project[];
}

const initialState: ProjectState = {
	loading: false,
	error: null,
	projects: [],
};

const reducer = (
	// rome-ignore lint/style/useDefaultParameterLast: <explanation>
	state: ProjectState = initialState,
	action: Action,
): ProjectState => {
	switch (action.type) {
		case ActionType.GET_PROJECTS_START:
			return {
				...state,
				loading: true,
			};
		case ActionType.GET_PROJECTS_SUCCESS:
			return {
				...state,
				loading: false,
				projects: action.payload,
			};
		case ActionType.GET_PROJECTS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
				projects: [],
			};
		default:
			return state;
	}
};

export default reducer;
