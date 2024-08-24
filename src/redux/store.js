import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./slices/accountSlice";
import themeSlice from "./slices/themeSlice";
import menuSlice from "./slices/menuSlice";

const store = configureStore({
	reducer: {
		account: accountSlice,
		theme: themeSlice,
		menu: menuSlice,
	},
});

export default store;
