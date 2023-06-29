import { useEffect, useState } from "react";
import {
	Box,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Drawer,
	Modal,
	Paper,
	Typography,
} from "@mui/material";

import { useActions, useSelector } from "../../hooks";
import {
	selectTasksState,
	selectAuthState,
	selectLoadingState,
	selectProjectsState,
} from "../../state";
import { AccordionComponent } from "./accordion";
import { TaskDetails } from "../task-details";
import { Header } from "./header";

export const Sidebar = () => {
	const { getAllProjects, getCurrentUserProjects, getCurrentUserTasks } =
		useActions();
	const { tasks } = useSelector(selectTasksState);
	const { allProjects, userProjects } = useSelector(selectProjectsState);
	const { currentUser } = useSelector(selectAuthState);
	const { fetchingAllProjects, fetchingUserProjects, fetchingUserTasks } =
		useSelector(selectLoadingState);
	const [modalOpen, setModalOpen] = useState(false);

	useEffect(() => {
		getAllProjects();
		if (currentUser) {
			getCurrentUserProjects();
			getCurrentUserTasks();
		}
	}, [currentUser]);

	return (
		<>
			<Drawer variant="permanent" anchor="left" elevation={8}>
				<Header />
				{currentUser && (
					<>
						{fetchingUserProjects ? (
							<div>loading</div>
						) : (
							<AccordionComponent
								title="My Projects"
								items={userProjects.map(({ id, project_name }) => ({
									id,
									name: project_name,
								}))}
							/>
						)}
						{fetchingUserTasks ? (
							<div>loading</div>
						) : (
							<AccordionComponent
								title="My Tasks"
								items={tasks.map(({ id, task_name, priority }) => ({
									id,
									name: task_name,
									priority,
								}))}
								type="task"
								setModalOpen={setModalOpen}
							/>
						)}
					</>
				)}
				{fetchingAllProjects ? (
					<div>loading</div>
				) : (
					<AccordionComponent
						title="All Projects"
						items={allProjects.map(({ id, project_name }) => ({
							id,
							name: project_name,
						}))}
					/>
				)}
			</Drawer>
			{/* <Modal open={modalOpen}>
				<Box
					sx={{
						background: "white",
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
					}}
					onClick={() => setModalOpen(false)}
				>
					<TaskDetails />
				</Box>
			</Modal> */}
		</>
	);
};
