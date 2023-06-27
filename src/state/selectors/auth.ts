import { AuthState } from "../reducers/authReducer";

export const selectAuthState = (state): AuthState => state.authState;
