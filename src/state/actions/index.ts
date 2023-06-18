import { AuthAction } from "./auth";
import { ProjectAction } from "./project";

export * from "./auth";
export * from "./project";

export type Action = ProjectAction | AuthAction;
