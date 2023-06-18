import { Avatar, Card, CardContent, Typography } from "@mui/material";

import { TaskObject } from "..";

interface TaskProps {
	task: TaskObject;
}

export const Task: React.FC<TaskProps> = ({ task }) => {
	const { task_name: taskName, assignee_username: username } = task;
	return (
		<Card>
			<CardContent>
				<Typography color="text.secondary">{task.task_name}</Typography>
				<Avatar sx={{ ml: "auto", width: 24, height: 24, fontSize: 12 }}>
					{username?.charAt(0).toUpperCase()}
				</Avatar>
			</CardContent>
		</Card>
	);
};
