import { Box, Stack, Typography } from "@mui/material";

import { TaskCard } from "../task-card";

import type { TaskType } from "../../types";

interface LaneProps {
	label: string;
	tasks: TaskType[];
}

export const Lane: React.FC<LaneProps> = ({ label, tasks }) => {
	return (
		<Box
			key={label}
			sx={{
				border: 1,
				borderColor: "grey.300",
				borderRadius: 1,
				backgroundColor: "grey.200",
				color: "grey.800",
				px: "4px",
			}}
		>
			<Typography
				sx={{
					backgroundColor: "grey.200",
					textTransform: "uppercase",
					textAlign: "center",
					my: 1,
				}}
			>
				{label}
			</Typography>
			<Stack spacing={1}>
				{tasks.map((task) => (
					<TaskCard key={task.id} task={task} />
				))}
			</Stack>
		</Box>
	);
};
