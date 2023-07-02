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
		case ActionType.UPDATE_PROJECT_TASK: {
			const task = action.payload;
			const newTasks = [...state.tasks];
			const replaceIndex = newTasks.findIndex((t) => t.id === task.id);
			if (replaceIndex !== -1) {
				newTasks[replaceIndex] = {
					id: task.id,
					task_name: task.task_name,
					status: task.status,
					priority: task.priority,
					project_id: task.project_id,
				};
			}
			return {
				...state,
				currentTask: action.payload,
				tasks: newTasks,
			};
		}
		default:
			return state;
	}
};

export default reducer;
