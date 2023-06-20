import { Dispatch } from "redux";

import { ActionType } from "../action-types";
import {
	Action,
	GetProjectsStartAction,
	GetProjectsSuccessAction,
	GetProjectsErrorAction,
} from "../actions";
import { BASE_URL } from "../../constants";
import { addAuthToken } from "../../lib";

export const getAllProjects = () => async (dispatch: Dispatch<Action>) => {
	dispatch({ type: ActionType.GET_ALL_PROJECTS_START });
	try {
		const result = await fetch(`${BASE_URL}/projects/all`);
		const projects = await result.json();

		dispatch({
			type: ActionType.GET_ALL_PROJECTS_SUCCESS,
			payload: projects,
		});
	} catch (error) {
		console.log(error);
	}
};

export const getCurrentUserProjects =
	() => async (dispatch: Dispatch<Action>) => {
		dispatch({ type: ActionType.GET_USER_PROJECTS_START });
		try {
			const result = await fetch(
				`${BASE_URL}/projects/currentUser`,
				addAuthToken(),
			);
			const projects = await result.json();

			dispatch({
				type: ActionType.GET_USER_PROJECTS_SUCCESS,
				payload: projects,
			});
		} catch (error) {
			console.log(error);
		}
	};

export const getProject = (projectId) => async (dispatch: Dispatch<Action>) => {
	dispatch({ type: ActionType.GET_PROJECT_START });
	try {
		const result = await fetch(`${BASE_URL}/projects/projectId/${projectId}`);
		const { project, tasks } = await result.json();

		dispatch({
			type: ActionType.GET_PROJECT_SUCCESS,
			payload: { project, tasks },
		});
	} catch (error) {
		console.log(error);
	}
};
