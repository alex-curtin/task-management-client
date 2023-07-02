import { Dispatch } from "redux";

import { ActionType } from "../action-types";
import {
	Action,
	SetUserTasksAction,
	SetProjectTasksAction,
	SetCurrentTaskAction,
	ReorderProjectTasksAction,
	UpdateProjectTaskAction,
} from "../actions";
import {
	fetchCurrentUserTasks,
	createProjectTask,
	fetchTask,
	updateTask,
} from "../../lib";
import { TaskType } from "../../types";

export const getCurrentUserTasks = () => async (dispatch: Dispatch<Action>) => {
	dispatch({ type: ActionType.REQUEST_START, payload: "fetchingUserTasks" });

	try {
		const tasks = await fetchCurrentUserTasks();

		dispatch({
			type: ActionType.SET_USER_TASKS,
			payload: tasks,
		});
	} catch (error) {
		console.log(error);

		dispatch({
			type: ActionType.REQUEST_ERROR,
			payload: {
				key: "fetchingUserTasks",
				error,
			},
		});
	} finally {
		dispatch({
			type: ActionType.REQUEST_COMPLETE,
			payload: "fetchingUserTasks",
		});
	}
};

export const addProjectTask =
	(body: TaskType) => async (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.REQUEST_START,
			payload: "creatingProjectTask",
		});

		try {
			const task = await createProjectTask(body);
			dispatch({
				type: ActionType.ADD_PROJECT_TASK,
				payload: task,
			});
		} catch (error) {
			console.log(error);

			dispatch({
				type: ActionType.REQUEST_ERROR,
				payload: {
					key: "creatingProjectTask",
					error,
				},
			});
		} finally {
			dispatch({
				type: ActionType.REQUEST_COMPLETE,
				payload: "creatingProjectTask",
			});
		}
	};

export const getCurrentTask =
	(taskId: number) => async (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.REQUEST_START,
			payload: "fetchingCurrentTask",
		});

		try {
			const task = await fetchTask(taskId);
			dispatch({
				type: ActionType.SET_CURRENT_TASK,
				payload: task,
			});
		} catch (error) {
			console.log(error);
			dispatch({
				type: ActionType.REQUEST_ERROR,
				payload: {
					key: "fetchingCurrentTask",
					error,
				},
			});
		} finally {
			dispatch({
				type: ActionType.REQUEST_COMPLETE,
				payload: "fetchingCurrentTask",
			});
		}
	};

export const setCurrentTask = (taskId: number | null): SetCurrentTaskAction => {
	return {
		type: ActionType.SET_CURRENT_TASK,
		payload: null,
	};
};

export const editTask =
	(taskId: number, body: Partial<TaskType>) =>
	async (dispatch: Dispatch<Action>) => {
		dispatch({ type: ActionType.REQUEST_START, payload: "updatingTask" });

		try {
			const task = await updateTask(taskId, body);
			dispatch({
				type: ActionType.UPDATE_PROJECT_TASK,
				payload: task,
			});
		} catch (error) {
			console.log(error);

			dispatch({
				type: ActionType.REQUEST_ERROR,
				payload: { key: "updatingTask", error },
			});
		}
	};

export const reorderProjectTasks = (
	status: number,
	prevIndex: number,
	newIndex: number,
): ReorderProjectTasksAction => {
	return {
		type: ActionType.REORDER_PROJECT_TASKS,
		payload: {
			status,
			prevIndex,
			newIndex,
		},
	};
};

export const updateProjectTaskStatus =
	(
		taskId: number,
		prevStatus: number,
		newStatus: number,
		prevIndex: number,
		newIndex: number,
	) =>
	async (dispatch: Dispatch<Action>) => {
		dispatch({ type: ActionType.REQUEST_START, payload: "updatingTask" });
		try {
			dispatch({
				type: ActionType.UPDATE_PROJECT_TASK_STATUS,
				payload: {
					prevStatus,
					newStatus,
					prevIndex,
					newIndex,
				},
			});
			const task = await updateTask(taskId, { status: newStatus });
		} catch (error) {
			console.log(error);
			dispatch({
				type: ActionType.REQUEST_ERROR,
				payload: {
					key: "updatingTask",
					error,
				},
			});
		} finally {
			dispatch({
				type: ActionType.REQUEST_COMPLETE,
				payload: "updatingTask",
			});
		}
	};
