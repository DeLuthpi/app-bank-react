import Home from "../pages/Home"
import Deposit from "../pages/Deposit"

export const routeList = [
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/home",
		element: <Home />
	},
	{
		path: "/deposit",
		element: <Deposit />
	},
];