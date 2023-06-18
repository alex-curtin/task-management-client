import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { useActions, useSelector } from "./hooks";
import { HomePage, ProjectPage } from "./pages";
import { NavBar } from "./components";
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
		<div>
			<NavBar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/project/:projectId" element={<ProjectPage />} />
			</Routes>
		</div>
	);
};

export default App;
