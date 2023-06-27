import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import { useActions, useSelector } from "./hooks";
import { HomePage, ProjectPage } from "./pages";
import { NavBar, Sidebar } from "./components";
import { selectAuthState } from "./state";

const App = () => {
	const { getCurrentUser } = useActions();
	const { currentUser } = useSelector(selectAuthState);

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
		</Box>
	);
};

export default App;
