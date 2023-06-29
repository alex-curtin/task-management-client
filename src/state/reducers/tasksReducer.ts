import { Action } from "../actions";
import { ActionType } from "../action-types";
import { ErrorType, TaskDetailsType, TaskType } from "../../types";

export interface TasksState {
	tasks: TaskType[];
	currentTask: TaskDetailsType | null;
}

const initialState: TasksState = {
	tasks: [],
	currentTask: null,
};

const reducer = (
	// rome-ignore lint/style/useDefaultParameterLast: <explanation>
	state: TasksState = initialState,
	action: Action,
): TasksState => {
	switch (action.type) {
		case ActionType.SET_USER_TASKS:
			return {
				...state,
				tasks: action.payload,
			};
		case ActionType.SET_CURRENT_TASK:
			return {
				...state,
				currentTask: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
