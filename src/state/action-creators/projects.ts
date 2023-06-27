import { Dispatch } from "redux";

import { ActionType } from "../action-types";
import {
	Action,
	SetAllProjectsAction,
	SetUserProjectsAction,
	SetProjectAction,
} from "../actions";
import { ProjectType } from "../../types";
import { BASE_URL } from "../../constants";
import { fetchAllProjects, fetchUserProjects, fetchProject } from "../../lib";

export const getAllProjects = () => async (dispatch: Dispatch<Action>) => {
	dispatch({ type: ActionType.REQUEST_START, payload: "fetchingAllProjects" });
	try {
		const projects = await fetchAllProjects();

		dispatch({
			type: ActionType.SET_ALL_PROJECTS,
			payload: projects,
		});
	} catch (error) {
		console.log(error);

		dispatch({
			type: ActionType.REQUEST_ERROR,
			payload: {
				key: "fetchingAllProjects",
				error,
			},
		});
	} finally {
		dispatch({
			type: ActionType.REQUEST_COMPLETE,
			payload: "fetchingAllProjects",
		});
	}
};

export const getCurrentUserProjects =
	() => async (dispatch: Dispatch<Action>) => {
		dispatch({
			type: ActionType.REQUEST_START,
			payload: "fetchingUserProjects",
		});
		try {
			const projects = await fetchUserProjects();

			dispatch({
				type: ActionType.SET_USER_PROJECTS,
				payload: projects,
			});
		} catch (error) {
			console.log(error);

			dispatch({
				type: ActionType.REQUEST_ERROR,
				payload: {
					key: "fetchingUserProjects",
					error,
				},
			});
		} finally {
			dispatch({
				type: ActionType.REQUEST_COMPLETE,
				payload: "fetchingUserProjects",
			});
		}
	};

export const getProject =
	(projectId: number) => async (dispatch: Dispatch<Action>) => {
		dispatch({ type: ActionType.REQUEST_START, payload: "fetchingProject" });
		try {
			const { project, tasks } = await fetchProject(projectId);

			dispatch({
				type: ActionType.SET_PROJECT,
				payload: project,
			});
			dispatch({
				type: ActionType.SET_PROJECT_TASKS,
				payload: tasks,
			});
		} catch (error) {
			console.log(error);

			dispatch({
				type: ActionType.REQUEST_ERROR,
				payload: {
					key: "fetchingProject",
					error,
				},
			});
		} finally {
			dispatch({
				type: ActionType.REQUEST_COMPLETE,
				payload: "fetchingProject",
			});
		}
	};

export const setAllProjects = (
	projects: ProjectType[],
): SetAllProjectsAction => {
	return {
		type: ActionType.SET_ALL_PROJECTS,
		payload: projects,
	};
};

export const setUserProjects = (
	projects: ProjectType[],
): SetUserProjectsAction => {
	return {
		type: ActionType.SET_USER_PROJECTS,
		payload: projects,
	};
};

export const setProject = (project: ProjectType): SetProjectAction => {
	return {
		type: ActionType.SET_PROJECT,
		payload: project,
	};
};
