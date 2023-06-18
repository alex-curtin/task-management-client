export interface Project {
	id: number;
	created_at: string;
	updated_at: string;
	project_name: string;
	description: string;
	created_by: number | null;
	owner: number | null;
}

export interface ErrorType {
	message: string;
}
