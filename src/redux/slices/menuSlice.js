import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
	name: "page",
	initialState: {
		pageActive: "home",
	},
	reducers: {
		menuActive(state, action) {
			state.pageActive = action.payload;
		},
	},
});

export const { menuActive } = menuSlice.actions;
export default menuSlice.reducer;
