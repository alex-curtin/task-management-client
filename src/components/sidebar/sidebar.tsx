import { useEffect } from "react";
import {
	Box,
	Accordion,
	AccordionSummary,
	AccordionDetails,
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
		<Box sx={{ backgroundColor: "grey.300", minHeight: "calc(100vh - 100px)" }}>
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
		</Box>
	);
};
