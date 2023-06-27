import { combineReducers } from "redux";

import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import loadingReducer from "./loadingReducer";
import projectReducer from "./projectReducer";
import projectsReducer from "./projectsReducer";
import tasksReducer from "./tasksReducer";

const reducers = combineReducers({
	authState: authReducer,
	errorState: errorReducer,
	loadingState: loadingReducer,
	projectState: projectReducer,
	projectsState: projectsReducer,
	tasksState: tasksReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
