import { ErrorType, ProjectType } from "../../types";
import { ActionType } from "../action-types";
import { Action } from "../actions";

interface ProjectsState {
	userProjects: ProjectType[];
	allProjects: ProjectType[];
}

const initialState: ProjectsState = {
	userProjects: [],
	allProjects: [],
};

const reducer = (
	// rome-ignore lint/style/useDefaultParameterLast: <explanation>
	state: ProjectsState = initialState,
	action: Action,
): ProjectsState => {
	switch (action.type) {
		case ActionType.SET_ALL_PROJECTS:
			return {
				...state,
				allProjects: action.payload,
			};
		case ActionType.SET_USER_PROJECTS:
			return {
				...state,
				userProjects: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
