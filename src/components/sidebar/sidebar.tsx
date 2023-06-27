import { useEffect } from "react";
import {
	Box,
	Accordion,
	AccordionSummary,
	AccordionDetails,
	Drawer,
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
import { Header } from "./header";

export const Sidebar = () => {
	const { getAllProjects, getCurrentUserProjects, getCurrentUserTasks } =
		useActions();
	const { tasks } = useSelector(selectTasksState);
	const { allProjects, userProjects } = useSelector(selectProjectsState);
	const { currentUser } = useSelector(selectAuthState);
	const { fetchingAllProjects, fetchingUserProjects, fetchingUserTasks } =
		useSelector(selectLoadingState);

	useEffect(() => {
		getAllProjects();
		if (currentUser) {
			getCurrentUserProjects();
			getCurrentUserTasks();
		}
	}, [currentUser]);

	return (
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
	);
};
