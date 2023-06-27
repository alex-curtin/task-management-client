import { useState } from "react";
import {
	Avatar,
	Box,
	ButtonBase,
	Modal,
	Paper,
	Tooltip,
	Typography,
} from "@mui/material";
import type { ProjectType, TaskType } from "../../types";
import { Add } from "@mui/icons-material";
import { AddTask } from "../add-task";

interface ProjectHeaderProps {
	project: ProjectType;
	tasks: TaskType[];
}

export const ProjectHeader: React.FC<ProjectHeaderProps> = ({
	project = {},
	tasks = [],
}) => {
	const [modalOpen, setModalOpen] = useState(false);
	const assignees = [...new Set(tasks.map((task) => task.assignee_username))];

	const avatars = assignees.map((assignee) => (
		<Tooltip key={assignee} title={assignee || "unassigned"}>
			<Avatar
				sx={{
					textTransform: "uppercase",
					fontWeight: "bold",
					height: "30px",
					width: "30px",
					ml: "-5px",
					"&:hover": {
						transform: "scale(1.2)",
					},
				}}
			>
				{assignee?.charAt(0)}
			</Avatar>
		</Tooltip>
	));

	return (
		<Box
			sx={{
				my: 1,
				p: 2,
				backgroundColor: "grey.200",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				borderRadius: 1,
			}}
		>
			<Typography
				sx={{
					textTransform: "uppercase",
					fontWeight: "bold",
				}}
			>
				{project.project_name}
			</Typography>
			<Box sx={{ display: "flex" }}>{avatars}</Box>
			<Typography variant="body2">{tasks.length} tasks</Typography>
			<ButtonBase onClick={() => setModalOpen(true)}>
				<Add />
			</ButtonBase>
			<Modal open={modalOpen}>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100%",
					}}
				>
					<AddTask
						projectId={project.id}
						closeModal={() => setModalOpen(false)}
					/>
				</Box>
			</Modal>
		</Box>
	);
};
