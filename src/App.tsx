import { Routes, Route } from "react-router-dom";

import { HomePage, ProjectPage } from "./pages";

const App = () => {
	return (
		<div>
			<div>nav</div>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/project/:projectId" element={<ProjectPage />} />
			</Routes>
		</div>
	);
};

export default App;
