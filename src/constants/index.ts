interface Lanes {
	[key: string]: {
		label: String;
		statusCode: number;
	};
}

export const lanes: Lanes = {
	todo: {
		label: "To Do",
		statusCode: 1,
	},
	progress: {
		label: "In Progress",
		statusCode: 2,
	},
	done: {
		label: "Done",
		statusCode: 3,
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
