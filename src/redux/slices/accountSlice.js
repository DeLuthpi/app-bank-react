import { createSlice } from "@reduxjs/toolkit";

const accountSlice = createSlice({
	name: "account",
	initialState: {
		saldo: 0,
		id: 1,
		transactions: [],
	},
	reducers: {
		deposit(state, action) {
			state.saldo += action.payload;
			state.transactions.push({ id: state.id++, type: "Deposit", date: new Date().toDateString() + " " + new Date().toLocaleTimeString(), amount: action.payload });
		},
		withdraw(state, action) {
			state.saldo -= action.payload;
			state.transactions.push({ id: state.id++, type: "Withdraw", date: new Date().toDateString() + " " + new Date().toLocaleTimeString(), amount: action.payload });
		},
	},
});

export const { deposit, withdraw } = accountSlice.actions;
export default accountSlice.reducer;
