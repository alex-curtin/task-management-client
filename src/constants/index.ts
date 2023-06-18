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

export * from "./api";
