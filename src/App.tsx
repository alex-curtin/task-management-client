import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Box, Modal } from "@mui/material";

import { useActions, useSelector } from "./hooks";
import { HomePage, ProjectPage } from "./pages";
import { NavBar, Sidebar, TaskDetails } from "./components";
import { selectAuthState, selectTasksState } from "./state";

const App = () => {
	const { getCurrentUser } = useActions();
	const { currentUser } = useSelector(selectAuthState);
	const { currentTask } = useSelector(selectTasksState);

	useEffect(() => {
		if (!currentUser) {
			getCurrentUser();
		}
	}, []);

	return (
		<Box>
			<NavBar />
			<Box
				sx={{ display: "grid", gridTemplateColumns: "200px 1fr", px: 2, mt: 2 }}
			>
				<Sidebar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/project/:projectId" element={<ProjectPage />} />
				</Routes>
			</Box>
			<Modal open={Boolean(currentTask)}>
				<Box
					sx={{
						background: "white",
						borderRadius: 1,
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: "50%",
					}}
				>
					<TaskDetails />
				</Box>
			</Modal>
		</Box>
	);
};

export default App;
