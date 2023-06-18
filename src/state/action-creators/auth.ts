import { Dispatch } from "redux";

import { ActionType } from "../action-types";
import { Action } from "../actions";
import { BASE_URL } from "../../constants";

export const signIn = (body) => async (dispatch: Dispatch<Action>) => {
	dispatch({ type: ActionType.SIGN_IN_START });
	try {
		const res = await fetch(`${BASE_URL}/auth/signin`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(body),
		});
		const { token, user } = await res.json();

		localStorage.setItem("token", token);

		dispatch({
			type: ActionType.SIGN_IN_SUCCESS,
			payload: { id: user.id, username: user.username },
		});
	} catch (error) {
		console.log({ error });
		dispatch({
			type: ActionType.SIGN_IN_ERROR,
			payload: error,
		});
	}
};

export const getCurrentUser = () => async (dispatch: Dispatch<Action>) => {
	dispatch({ type: ActionType.GET_CURRENT_USER_START });
	const token = localStorage.getItem("token");
	if (!token) {
		return dispatch({ type: ActionType.GET_CURRENT_USER_FAIL });
	}
	try {
		const res = await fetch(`${BASE_URL}/auth/user/current`, {
			headers: {
				"x-auth-token": token,
			},
		});
		const user = await res.json();

		dispatch({
			type: ActionType.GET_CURRENT_USER_SUCCESS,
			payload: user,
		});
	} catch (error) {
		console.log(error);
	}
};
