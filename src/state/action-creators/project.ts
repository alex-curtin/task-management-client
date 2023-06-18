import { Dispatch } from "redux";

import { ActionType } from "../action-types";
import {
	Action,
	GetProjectsStartAction,
	GetProjectsSuccessAction,
	GetProjectsErrorAction,
} from "../actions";
import { BASE_URL } from "../../constants";

export const getAllProjects = () => async (dispatch: Dispatch<Action>) => {
	dispatch({ type: ActionType.GET_PROJECTS_START });
	try {
		const result = await fetch(`${BASE_URL}/projects/all`);
		const projects = await result.json();

		dispatch({
			type: ActionType.GET_PROJECTS_SUCCESS,
			payload: projects,
		});
	} catch (error) {
		console.log(error);
	}
};

export const getCurrentUserProjects =
	(userId) => async (dispatch: Dispatch<Action>) => {
		dispatch({ type: ActionType.GET_PROJECTS_START });
		try {
			const result = await fetch(`${BASE_URL}/projects/assignee/${userId}`);
			const projects = await result.json();

			dispatch({
				type: ActionType.GET_PROJECTS_SUCCESS,
				payload: projects,
			});
		} catch (error) {
			console.log(error);
		}
	};
