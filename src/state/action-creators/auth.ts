import { Dispatch } from "redux";

import { ActionType } from "../action-types";
import {
	Action,
	RequestCompleteAction,
	RequestErrorAction,
	RequestStartAction,
	SetCurrentUserAction,
} from "../actions";
import { BASE_URL } from "../../constants";
import { signIn, fetchCurrentUser } from "../../lib";
import { UserType } from "../../types";

export const signInUser =
	(body: UserType) => async (dispatch: Dispatch<Action>) => {
		dispatch<RequestStartAction>({
			type: ActionType.REQUEST_START,
			payload: "signingInUser",
		});
		try {
			const user = await signIn(body);

			dispatch<SetCurrentUserAction>({
				type: ActionType.SET_CURRENT_USER,
				payload: { id: user.id, username: user.username },
			});
		} catch (error) {
			console.log(error);

			dispatch<RequestErrorAction>({
				type: ActionType.REQUEST_ERROR,
				payload: {
					key: "signingInUser",
					error,
				},
			});
		} finally {
			dispatch<RequestCompleteAction>({
				type: ActionType.REQUEST_COMPLETE,
				payload: "signingInUser",
			});
		}
	};

export const getCurrentUser = () => async (dispatch: Dispatch<Action>) => {
	dispatch<RequestStartAction>({
		type: ActionType.REQUEST_START,
		payload: "fetchingCurrentUser",
	});

	try {
		const user = await fetchCurrentUser();

		dispatch<SetCurrentUserAction>({
			type: ActionType.SET_CURRENT_USER,
			payload: user,
		});
	} catch (error) {
		console.log(error);

		dispatch<RequestErrorAction>({
			type: ActionType.REQUEST_ERROR,
			payload: {
				key: "fetchingCurrentUser",
				error,
			},
		});
	} finally {
		dispatch<RequestCompleteAction>({
			type: ActionType.REQUEST_COMPLETE,
			payload: "fetchingCurrentUser",
		});
	}
};

export const setCurrentUser = (user: UserType): SetCurrentUserAction => {
	return {
		type: ActionType.SET_CURRENT_USER,
		payload: user,
	};
};
