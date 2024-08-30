import { createSlice } from "@reduxjs/toolkit";

const amountSlice = createSlice({
	name: "amount",
	initialState: {
		amountSelected: "",
	},
	reducers: {
		amountActive(state, action) {
			state.amountSelected = action.payload;
		},
	},
});

export const { amountActive } = amountSlice.actions;
export default amountSlice.reducer;
