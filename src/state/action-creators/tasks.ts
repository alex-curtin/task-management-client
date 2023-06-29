import { Dispatch } from "redux";

import { ActionType } from "../action-types";
import {
	Action,
	SetUserTasksAction,
	SetProjectTasksAction,
	SetCurrentTaskAction,
} from "../actions";
import { fetchCurrentUserTasks, createProjectTask, fetchTask } from "../../lib";
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
