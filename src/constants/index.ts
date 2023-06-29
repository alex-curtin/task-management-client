interface TaskStatus {
	statusCode: number;
	label: string;
}

export const taskStatuses: TaskStatus = [
	{
		statusCode: 1,
		label: "To Do",
	},
	{
		statusCode: 2,
		label: "In Progress",
	},
	{
		statusCode: 3,
		label: "Done",
	},
];

export const priorities = {
	1: {
		label: "low",
		color: "success",
	},
	2: {
		label: "medium",
		color: "warning",
	},
	3: {
		label: "high",
		color: "error",
	},
};

export * from "./api";
