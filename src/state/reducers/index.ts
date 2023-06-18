import { combineReducers } from "redux";

import authReducer from "./authReducer";
import projectReducer from "./projectReducer";

const reducers = combineReducers({
	authState: authReducer,
	projectState: projectReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
