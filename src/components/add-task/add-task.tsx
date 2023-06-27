import { useEffect, useState } from "react";
import {
	Autocomplete,
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	TextField,
} from "@mui/material";

import { useActions } from "../../hooks";
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
	const { createProjectTask } = useActions();

	useEffect(() => {
		const fetchUsers = async () => {
			const fetchedUsers = await fetchAllUsers();
			setUsers(fetchedUsers);
		};
		fetchUsers();
	}, []);

	const handleSubmit = () => {
		console.log(assignee);
		const body = {
			projectId,
			taskName,
			description,
			assignee,
			priority,
		};
		console.log("creating task", body);
		createProjectTask(body);
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
			}}
			spacing={2}
		>
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
				rows={4}
			/>
			<FormControl>
				<InputLabel>Assignee</InputLabel>
				<Select value={assignee} onChange={(e) => setAssignee(e.target.value)}>
					{users.map((user) => (
						<MenuItem key={user.id} value={user.id}>
							{user.username}
						</MenuItem>
					))}
					<MenuItem value={""} sx={{ display: "none" }} />
				</Select>
			</FormControl>
			<FormControl>
				<InputLabel>Priority</InputLabel>
				<Select value={priority} onChange={(e) => setPrioriy(e.target.value)}>
					{Object.entries(priorities).map(([key, data]) => (
						<MenuItem key={key} value={parseInt(key)}>
							{data.label}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<Button variant="contained" onClick={handleSubmit}>
				Create Task
			</Button>
		</Stack>
	);
};
