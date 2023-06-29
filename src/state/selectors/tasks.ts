import { TasksState } from "../reducers/tasksReducer";

export const selectTasksState = (state): TasksState => state.tasksState;
