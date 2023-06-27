import { AuthAction } from "./auth";
import { ProjectAction } from "./project";
import { ProjectsAction } from "./projects";
import { RequestAction } from "./request";
import { TasksAction } from "./tasks";

export * from "./auth";
export * from "./request";
export * from "./project";
export * from "./projects";
export * from "./tasks";

export type Action =
	| AuthAction
	| ProjectAction
	| ProjectsAction
	| RequestAction
	| TasksAction;
