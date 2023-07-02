import { useState } from "react";
import { Box, Button } from "@mui/material";
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

interface TextEditorProps {
	handleChange: () => void;
	value: string;
}

export const TextEditor: React.FC<TextEditorProps> = ({
	handleChange = () => {},
	value = "",
}) => {
	const modules = {
		toolbar: [
			[{ header: [1, 2, 3, 4, 5, 6, false] }],
			["bold", "italic", "underline", "strike", "blockquote"],
			[{ list: "ordered" }, { list: "bullet" }],
			["link"],
		],
	};
	const formats = [
		"header",
		"bold",
		"italic",
		"underline",
		"strike",
		"blockquote",
		"list",
		"bullet",
		"link",
	];

	return (
		<Box sx={{ width: "100%" }}>
			<ReactQuill
				value={value}
				onChange={handleChange}
				modules={modules}
				formats={formats}
			/>
		</Box>
	);
};
