import { ActionType } from "../action-types";
import { Action } from "../actions";

import type { ProjectType, ErrorType, TaskType } from "../../types";

interface ProjectState {
	loading: boolean;
	error: ErrorType | null;
	project: Project | null;
	tasks: TaskType[];
}

const initialState: ProjectState = {
	loading: false,
	error: null,
	project: null,
	tasks: [],
};

const reducer = (
	// rome-ignore lint/style/useDefaultParameterLast: <explanation>
	state: ProjectState = initialState,
	action: Action,
): ProjectState => {
	switch (action.type) {
		case ActionType.GET_PROJECT_START:
		case ActionType.GET_PROJECT_TASKS_START:
			return {
				...state,
				loading: true,
			};
		case ActionType.GET_PROJECT_SUCCESS:
			return {
				...state,
				loading: false,
				project: action.payload,
			};
		case ActionType.GET_PROJECT_TASKS_SUCCESS:
			return {
				...state,
				loading: false,
				tasks: action.payload,
			};
		case ActionType.GET_PROJECT_ERROR:
		case ActionType.GET_PROJECT_TASKS_ERROR:
			return {
				...state,
				loading: false,
				project: null,
				tasks: [],
			};

		default:
			return state;
	}
};

export default reducer;
