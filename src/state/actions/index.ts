import { AuthAction } from "./auth";
import { ProjectAction } from "./project";
import { ProjectsAction } from "./projects";
import { TasksAction } from "./tasks";

export * from "./auth";
export * from "./project";

export type Action = ProjectAction | AuthAction | ProjectsAction | TasksAction;
