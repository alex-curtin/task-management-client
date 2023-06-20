import { Action } from "../actions";
import { ActionType } from "../action-types";
import { ErrorType, TaskType } from "../../types";

interface TasksState {
	loading: boolean;
	error: ErrorType | null;
	tasks: TaskType[];
}

const initialState: TasksState = {
	loading: false,
	error: null,
	tasks: [],
};

const reducer = (
	// rome-ignore lint/style/useDefaultParameterLast: <explanation>
	state: TasksState = initialState,
	action: Action,
): TasksState => {
	switch (action.type) {
		case ActionType.GET_USER_TASKS_START:
			return {
				...state,
				loading: true,
			};
		case ActionType.GET_USER_TASKS_SUCCESS:
			return {
				...state,
				loading: false,
				tasks: action.payload,
			};
		case ActionType.GET_USER_TASKS_ERROR:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
