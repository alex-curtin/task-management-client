import { Box, Stack, Typography } from "@mui/material";

import { Task } from "../task";

export interface TaskObject {
	id: number;
	task_name: string;
	description: string;
	status: number;
	priority: number;
	assignee: number;
	assignee_username: string;
}

interface LaneProps {
	label: string;
	tasks: TaskObject[];
}

export const Lane: React.FC<LaneProps> = ({ label, tasks }) => {
	return (
		<Box
			key={label}
			sx={{
				border: 1,
				borderColor: "grey.400",
				borderRadius: 1,
				backgroundColor: "grey.400",
				color: "grey.100",
				px: 2,
			}}
		>
			<Typography sx={{ backgroundColor: "grey.400" }}>{label}</Typography>
			<Stack spacing={1}>
				{tasks.map((task) => (
					<Task key={task.id} task={task} />
				))}
			</Stack>
		</Box>
	);
};
