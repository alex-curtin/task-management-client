export interface ProjectType {
	id: number;
	created_at?: string;
	updated_at?: string;
	project_name: string;
	description?: string;
	created_by?: number | null;
	owner?: number | null;
}

export interface ErrorType {
	message: string;
}

export interface TaskType {
	id?: number;
	task_name: string;
	description?: string;
	status?: number;
	priority?: number;
	assignee?: number;
	assignee_username?: string;
}

export interface UserType {
	id?: number;
	username: string;
	password?: string;
}

export interface TaskDetailsType extends TaskType {
	created_by: UserType;
	assignee: UserType;
}
