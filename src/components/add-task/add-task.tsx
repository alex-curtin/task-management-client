import { useEffect, useState } from "react";
import {
	Box,
	Button,
	ButtonBase,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";

import { useActions, useSelector } from "../../hooks";
import { selectLoadingState } from "../../state";
import { UserType } from "../../types";
import { fetchAllUsers } from "../../lib";
import { priorities } from "../../constants";

interface AddTaskProps {
	projectId: number;
	closeModal: () => void;
}

export const AddTask: React.FC<AddTaskProps> = ({
	projectId,
	closeModal = () => {},
}) => {
	const [taskName, setTaskName] = useState("");
	const [description, setDescription] = useState("");
	const [assignee, setAssignee] = useState<UserType | null>("");
	const [users, setUsers] = useState<UserType[]>([]);
	const [priority, setPrioriy] = useState<number>(1);
	const { addProjectTask } = useActions();
	const { creatingProjectTask } = useSelector(selectLoadingState);

	useEffect(() => {
		const fetchUsers = async () => {
			const fetchedUsers = await fetchAllUsers();
			setUsers(fetchedUsers);
		};
		fetchUsers();
	}, []);

	const handleSubmit = () => {
		const body = {
			projectId,
			taskName,
			description,
			assignee,
			priority,
		};
		addProjectTask(body);
		closeModal();
	};

	return (
		<Stack
			sx={{
				backgroundColor: "white",
				width: "50%",
				px: 2,
				py: 4,
				borderRadius: 1,
				maxWidth: "600px",
			}}
			spacing={4}
		>
			<Box sx={{ display: "flex", justifyContent: "space-between" }}>
				<Typography sx={{ textTransform: "uppercase" }}>
					Create A New Task
				</Typography>
				<ButtonBase onClick={closeModal}>
					<Close />
				</ButtonBase>
			</Box>

			<TextField
				label="Task Name"
				value={taskName}
				onChange={(e) => setTaskName(e.target.value)}
			/>
			<TextField
				label="Description"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				multiline
				rows={6}
			/>
			<Box sx={{ display: "flex", justifyContent: "space-around", gap: 4 }}>
				<FormControl sx={{ width: "100%" }}>
					<InputLabel>Assignee</InputLabel>
					<Select
						value={assignee}
						onChange={(e) => setAssignee(e.target.value)}
					>
						{users.map((user) => (
							<MenuItem key={user.id} value={user.id}>
								{user.username}
							</MenuItem>
						))}
						<MenuItem value={""} sx={{ display: "none" }} />
					</Select>
				</FormControl>
				<FormControl sx={{ width: "100%" }}>
					<InputLabel>Priority</InputLabel>
					<Select value={priority} onChange={(e) => setPrioriy(e.target.value)}>
						{Object.entries(priorities).map(([key, data]) => (
							<MenuItem key={key} value={parseInt(key)}>
								{data.label}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>

			<Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1 }}>
				<Button
					variant="contained"
					onClick={handleSubmit}
					disabled={creatingProjectTask}
				>
					Create Task
				</Button>
				<Button
					onClick={closeModal}
					variant="outlined"
					disabled={creatingProjectTask}
				>
					Cancel
				</Button>
			</Box>
		</Stack>
	);
};
