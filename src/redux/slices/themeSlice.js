import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
	name: "theme",
	initialState: {
		darkMode: false,
	},
	reducers: {
		themeDark(state) {
			state.darkMode = true;
			document.body.classList.add("dark-mode");
		},
		themeLight(state) {
			state.darkMode = false;
			document.body.classList.remove("dark-mode");
		},
	},
});

export const { themeDark, themeLight } = themeSlice.actions;
export default themeSlice.reducer;
