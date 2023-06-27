import { ActionType } from "../action-types";
import { Action } from "../actions";

import type { ProjectType, ErrorType, TaskType } from "../../types";

interface ProjectState {
	project: ProjectType | null;
	tasks: TaskType[];
}

const initialState: ProjectState = {
	project: null,
	tasks: [],
};

const reducer = (
	// rome-ignore lint/style/useDefaultParameterLast: <explanation>
	state: ProjectState = initialState,
	action: Action,
): ProjectState => {
	switch (action.type) {
		case ActionType.SET_PROJECT:
			return {
				...state,
				project: action.payload,
			};
		case ActionType.SET_PROJECT_TASKS:
			return {
				...state,
				tasks: action.payload,
			};
		case ActionType.ADD_PROJECT_TASK:
			return {
				...state,
				tasks: [...state.tasks, action.payload],
			};
		default:
			return state;
	}
};

export default reducer;
