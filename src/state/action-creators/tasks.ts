import { Dispatch } from "redux";

import { ActionType } from "../action-types";
import { Action } from "../actions";
import { BASE_URL } from "../../constants";
import { addAuthToken } from "../../lib";

export const getCurrentUserTasks = () => async (dispatch: Dispatch<Action>) => {
	dispatch({ type: ActionType.GET_USER_TASKS_START });

	try {
		const result = await fetch(`${BASE_URL}/tasks/currentUser`, addAuthToken());
		const tasks = await result.json();

		dispatch({
			type: ActionType.GET_USER_TASKS_SUCCESS,
			payload: tasks,
		});
	} catch (error) {
		console.log(error);
	}
};
