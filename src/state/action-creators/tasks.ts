import { Dispatch } from "redux";

import { ActionType } from "../action-types";
import { Action, SetUserTasksAction, SetProjectTasksAction } from "../actions";
import { fetchCurrentUserTasks, createProjectTask } from "../../lib";
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

export const addProjectTask = (body) => async (dispatch: Dispatch<Action>) => {
	dispatch({ type: ActionType.REQUEST_START, payload: "creatingProjectTask" });

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
