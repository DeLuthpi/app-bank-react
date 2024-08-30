import iconMcard from "../assets/images/m-card.png";

const sidebarMenu = [
	{
		id: 1,
		navRoute: "/home",
		navName: "Home",
		navIcon: "fa-solid fa-house",
	},
	{
		id: 2,
		navRoute: "/deposit",
		navName: "Deposit",
		navIcon: "fa-solid fa-money-bill-transfer",
	},
	{
		id: 3,
		navRoute: "/withdraw",
		navName: "Withdraw",
		navIcon: "fa-solid fa-money-bill-transfer",
	},
	{
		id: 4,
		navRoute: "/changepin",
		navName: "Change Pin",
		navIcon: "fa-solid fa-key",
	},
];

const menuAmount = [
	{
		id: 1,
		amount: 10000,
	},
	{
		id: 2,
		amount: 15000,
	},
	{
		id: 3,
		amount: 20000,
	},
	{
		id: 4,
		amount: 25000,
	},
	{
		id: 5,
		amount: 50000,
	},
	{
		id: 6,
		amount: 100000,
	},
	{
		id: 7,
		amount: 150000,
	},
	{
		id: 8,
		amount: 200000,
	},
	{
		id: 9,
		amount: 250000,
	},
	{
		id: 10,
		amount: 500000,
	},
];

export { sidebarMenu, iconMcard, menuAmount };
