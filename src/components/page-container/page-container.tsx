import { Box } from "@mui/material";

export const PageContainer: React.FC = ({ children }) => {
	return <Box sx={{ px: 4, maxWidth: "1200px" }}>{children}</Box>;
};
