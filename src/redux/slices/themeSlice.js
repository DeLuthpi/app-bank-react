import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
	name: "theme",
	initialState: {
		darkMode: false,
	},
	reducers: {
		themeDark(state) {
			state.darkMode = true;
		},
		themeLight(state) {
			state.darkMode = false;
		},
	},
});

export const { themeDark, themeLight } = themeSlice.actions;
export default themeSlice.reducer;
