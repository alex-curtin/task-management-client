import { ErrorType, ProjectType } from "../../types";
import { ActionType } from "../action-types";
import { Action } from "../actions";

interface ProjectsState {
	userProjects: {
		loading: boolean;
		error: ErrorType | null;
		data: ProjectType[];
	};
	allProjects: {
		loading: boolean;
		error: ErrorType | null;
		data: ProjectType[];
	};
}

const initialState: ProjectsState = {
	userProjects: {
		loading: false,
		error: null,
		data: [],
	},
	allProjects: {
		loading: false,
		error: null,
		data: [],
	},
};

const reducer = (
	// rome-ignore lint/style/useDefaultParameterLast: <explanation>
	state: ProjectsState = initialState,
	action: Action,
): ProjectsState => {
	switch (action.type) {
		case ActionType.GET_ALL_PROJECTS_START:
			return {
				...state,
				allProjects: {
					...state.allProjects,
					loading: true,
				},
			};
		case ActionType.GET_ALL_PROJECTS_SUCCESS:
			return {
				...state,
				allProjects: {
					...state.allProjects,
					loading: false,
					data: action.payload,
				},
			};
		case ActionType.GET_ALL_PROJECTS_ERROR:
			return {
				...state,
				allProjects: {
					...state.allProjects,
					loading: false,
					error: action.payload,
				},
			};
		case ActionType.GET_USER_PROJECTS_START:
			return {
				...state,
				userProjects: {
					...state.userProjects,
					loading: true,
				},
			};
		case ActionType.GET_USER_PROJECTS_SUCCESS:
			return {
				...state,
				userProjects: {
					...state.userProjects,
					loading: false,
					data: action.payload,
				},
			};
		case ActionType.GET_USER_PROJECTS_ERROR:
			return {
				...state,
				userProjects: {
					...state.userProjects,
					loading: false,
					error: action.payload,
				},
			};
		default:
			return state;
	}
};

export default reducer;
