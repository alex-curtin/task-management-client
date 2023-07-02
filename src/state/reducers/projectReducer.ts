import { ActionType } from "../action-types";
import { Action } from "../actions";

import type {
	ProjectType,
	ErrorType,
	TaskType,
	TaskStatusType,
} from "../../types";
import { taskStatuses } from "../../constants";

interface ProjectState {
	project: ProjectType | null;
	tasks: {
		[key: number]: Task[];
	};
	statuses: TaskStatusType[];
}

const initialState: ProjectState = {
	project: null,
	tasks: {},
	statuses: [],
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
		case ActionType.SET_PROJECT_TASK_STATUSES:
			return {
				...state,
				statuses: action.payload,
			};
		case ActionType.SET_PROJECT_TASKS: {
			if (!state.statuses.length) {
				return state;
			}

			const allTasks = action.payload;
			const tasksObj = state.statuses.reduce(
				(obj, cur) => ({
					...obj,
					[cur.statusCode]: allTasks.filter(
						(task) => task.status === cur.statusCode,
					),
				}),
				{},
			);

			return {
				...state,
				tasks: tasksObj,
			};
		}
		case ActionType.UPDATE_PROJECT_TASK: {
			const task = action.payload;
			const { status, project_id, id } = task;
			if (project_id !== state.project.id) {
				return state;
			}
			const prevTasks = state.tasks[status];
			const replaceIndex = prevTasks.findIndex((t) => t.id === id);
			const newTasks = [
				...prevTasks.slice(0, replaceIndex),
				task,
				...prevTasks.slice(replaceIndex + 1),
			];
			return {
				...state,
				tasks: {
					...state.tasks,
					[status]: newTasks,
				},
			};
		}
		case ActionType.REORDER_PROJECT_TASKS: {
			const { prevIndex, newIndex, status } = action.payload;
			const newTasks = [...state.tasks[status]];
			const task = newTasks[prevIndex];
			newTasks.splice(prevIndex, 1);
			newTasks.splice(newIndex, 0, task);
			return {
				...state,
				tasks: {
					...state.tasks,
					[status]: newTasks,
				},
			};
		}
		case ActionType.UPDATE_PROJECT_TASK_STATUS: {
			const { prevIndex, prevStatus, newIndex, newStatus } = action.payload;

			const prevTasks = [...state.tasks[prevStatus]];
			const newTask = { ...prevTasks[prevIndex], status: newStatus };
			prevTasks.splice(prevIndex, 1);

			const newTasks = [...state.tasks[newStatus]];
			newTasks.splice(newIndex, 0, newTask);

			return {
				...state,
				tasks: {
					...state.tasks,
					[prevStatus]: prevTasks,
					[newStatus]: newTasks,
				},
			};
		}
		case ActionType.ADD_PROJECT_TASK: {
			const task = action.payload;
			const { status } = task;

			return {
				...state,
				tasks: {
					...state.tasks,
					[status]: [...state.tasks[status], task],
				},
			};
		}
		default:
			return state;
	}
};

export default reducer;
