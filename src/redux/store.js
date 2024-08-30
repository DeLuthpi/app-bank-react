import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./slices/accountSlice";
import themeSlice from "./slices/themeSlice";
import menuSlice from "./slices/menuSlice";
import amountSlice from "./slices/amountSlice";

const store = configureStore({
	reducer: {
		account: accountSlice,
		theme: themeSlice,
		menu: menuSlice,
		amount: amountSlice,
	},
});

export default store;
