import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import CurrencyFormat from "react-currency-format";
import { iconMcard } from "../helpers/const";

const Home = () => {
	const saldo = useSelector((state) => state.account.saldo);

	return (
		<div className="container">
			<Navbar />
			<div className="main-page">
				<Sidebar />
				<div className="main-section">
					<div className="main-info">
						<span className="main-bg-opacity"></span>
						<h1 className="main-title">Saldo anda saat ini</h1>
						<h1 className="main-saldo">
							<CurrencyFormat value={saldo} displayType={"text"} thousandSeparator={true} decimalSeparator="." thousandSpacing="3" prefix={"Rp. "} />
							.00,-
						</h1>
						<img src={iconMcard} className="mcard-img" alt="m-card image" />
					</div>
					<h3>Riwayat Transaksi :</h3>
					<p className="main-desc">Tidak ada riwayat transaksi</p>
				</div>
			</div>
		</div>
	);
};

export default Home;
