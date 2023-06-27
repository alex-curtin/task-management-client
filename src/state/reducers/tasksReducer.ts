import { Action } from "../actions";
import { ActionType } from "../action-types";
import { ErrorType, TaskType } from "../../types";

interface TasksState {
	tasks: TaskType[];
}

const initialState: TasksState = {
	tasks: [],
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
		default:
			return state;
	}
};

export default reducer;
