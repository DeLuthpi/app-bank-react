import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
	name: "account",
	initialState: {
		saldo: 0,
	},
	reducers: {
		deposit(state, action) {
			state.saldo += action.payload;
		},
		withdraw(state, action) {
			state.saldo -= action.payload;
		},
	},
});

export const { deposit, withdraw } = accountSlice.actions;
export default accountSlice.reducer;
