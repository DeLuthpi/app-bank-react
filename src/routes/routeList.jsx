import Home from "../pages/Home";
import Deposit from "../pages/Deposit";
import Withdraw from "../pages/Withdraw";
import ChangePin from "../pages/ChangePin";

export const routeList = [
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/home",
		element: <Home />,
	},
	{
		path: "/deposit",
		element: <Deposit />,
	},
	{
		path: "/withdraw",
		element: <Withdraw />,
	},
	{
		path: "/changepin",
		element: <ChangePin />,
	},
];
