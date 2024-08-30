import { useSelector } from "react-redux";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import CurrencyFormat from "react-currency-format";
import { iconMcard } from "../helpers/const";

const Home = () => {
	const saldo = useSelector((state) => state.account.saldo);
	const transactions = useSelector((state) => state.account.transactions);

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
					<div className="main-transaction">
						{transactions.length === 0 ? (
							<p className="main-desc">Belum ada riwayat transaksi</p>
						) : (
							transactions
								.map((list) => {
									return (
										<div key={list?.id} className="transaction-history">
											<p className="transaction-date">{list?.date}</p>
											<div className="transaction-type">
												<div className={`${list?.type === "Deposit" ? "trx-type deposit" : "trx-type withdraw"}`}>{list?.type}</div>
												<div className={`${list?.type === "Deposit" ? "trx-amount deposit" : "trx-amount withdraw"}`}>
													<CurrencyFormat value={list?.amount} displayType={"text"} thousandSeparator={true} thousandSpacing="3" prefix={"Rp. "} suffix=".00,-" />
												</div>
											</div>
										</div>
									);
								})
								.reverse()
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
