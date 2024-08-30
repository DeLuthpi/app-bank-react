import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { deposit } from "../redux/slices/accountSlice";
import { amountActive } from "../redux/slices/amountSlice";
import "../assets/css/transaction-style.css";
import CurrencyFormat from "react-currency-format";
import { iconMcard, menuAmount } from "../helpers/const";
import { useRef } from "react";
import { toast } from "react-toastify";

const Deposit = () => {
	const saldo = useSelector((state) => state.account.saldo);
	const amountSelected = useSelector((state) => state.amount.amountSelected);

	const dispatch = useDispatch();

	const handleDeposit = (e) => {
		e.preventDefault();

		let amount = e.target.deposit.value;
		amountSelected === "" ? (amount = e.target.deposit.value) : (amount = amountSelected);

		if (amount !== "") {
			dispatch(deposit(parseInt(amount)));
			toast.success("Anda berhasil melakukan deposit sebesar Rp. " + amount + ".00,-", {
				autoClose: 2500,
			});
			dispatch(amountActive(""));
			e.target.reset();
		} else {
			toast.error("Silahkan pilih amount yang akan di deposit atau input amount !", {
				autoClose: 2500,
			});
		}
	};

	const formDeposit = useRef();
	const handleAmount = () => {
		formDeposit.current.reset();
	};

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
							<CurrencyFormat value={saldo} displayType={"text"} thousandSeparator={true} thousandSpacing="3" prefix={"Rp. "} suffix=".00,-" />
						</h1>
						<img src={iconMcard} className="mcard-img" alt="m-card image" />
					</div>
					<fieldset>
						<legend>Menu Deposit</legend>
						<div className="form-transaction">
							<h3 className="title-form">Silahkan pilih jumlah amount deposit :</h3>
							<ul className="amount-list">
								{menuAmount?.map((list) => {
									return (
										<li
											className={`amount-item ${amountSelected === list?.amount ? "active" : ""}`}
											key={list?.id}
											onClick={() => {
												dispatch(amountActive(list?.amount)), handleAmount();
											}}>
											<span>
												<CurrencyFormat value={list?.amount} displayType={"text"} thousandSeparator={true} thousandSpacing="3" />
											</span>
										</li>
									);
								})}
							</ul>
							<h3 className="title-form">atau input amount deposit :</h3>
							<form ref={formDeposit} className="form-input" onSubmit={handleDeposit}>
								<input type="number" name="deposit" className="form-control input-form" placeholder="Input amount deposit" autoComplete="off" onFocus={() => dispatch(amountActive(""))} />
								<button type="submit" className="btn-deposit">
									Deposit
								</button>
							</form>
						</div>
					</fieldset>
				</div>
			</div>
		</div>
	);
};

export default Deposit;
