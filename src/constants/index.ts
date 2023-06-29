interface TaskStatuses {
	[key: number]: {
		label: string;
	};
}

export const taskStatuses = {
	1: {
		label: "To Do",
	},
	2: {
		label: "In Progress",
	},
	3: {
		label: "Done",
	},
};

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
