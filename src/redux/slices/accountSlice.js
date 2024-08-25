import { createSlice } from "@reduxjs/toolkit";

const datetime = new Date().toDateString() + " " + new Date().toLocaleTimeString();

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
			state.transactions.push({ id: state.id++, type: "Deposit", date: datetime, amount: action.payload });
		},
		withdraw(state, action) {
			state.saldo -= action.payload;
			state.transactions.push({ id: state.id++, type: "Withdraw", date: datetime, amount: action.payload });
		},
	},
});

export const { deposit, withdraw } = accountSlice.actions;
export default accountSlice.reducer;
