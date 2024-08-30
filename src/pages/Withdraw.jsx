import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { withdraw } from "../redux/slices/accountSlice";
import { amountActive } from "../redux/slices/amountSlice";
import "../assets/css/transaction-style.css";
import CurrencyFormat from "react-currency-format";
import { iconMcard, menuAmount } from "../helpers/const";
import { useRef } from "react";
import { toast } from "react-toastify";

const Withdraw = () => {
	const saldo = useSelector((state) => state.account.saldo);
	const amountSelected = useSelector((state) => state.amount.amountSelected);

	const dispatch = useDispatch();

	const handleWithdraw = (e) => {
		e.preventDefault();

		let amount = e.target.withdraw.value;
		amountSelected === "" ? (amount = e.target.withdraw.value) : (amount = amountSelected);

		if (amount !== "") {
			if (amount > saldo) {
				toast.error("Saldo anda tidak mencukupi !", {
					autoClose: 2500,
				});
			} else {
				dispatch(withdraw(parseInt(amount)));
				toast.success("Anda berhasil melakukan withdraw sebesar Rp. " + amount + ".00,-", {
					autoClose: 2500,
				});
				dispatch(amountActive(""));
				e.target.reset();
			}
		} else {
			toast.error("Silahkan pilih jumlah amount yang akan di withdraw atau input amount !", {
				autoClose: 2500,
			});
		}
	};

	const formWithdraw = useRef();
	const handleAmount = () => {
		formWithdraw.current.reset();
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
						<legend>Menu Withdraw</legend>
						<div className="form-transaction">
							<h3 className="title-form">Silahkan pilih jumlah amount withdraw :</h3>
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
							<h3 className="title-form">atau input amount withdraw :</h3>
							<form ref={formWithdraw} className="form-input" onSubmit={handleWithdraw}>
								<input type="number" name="withdraw" className="form-control input-form" placeholder="Input amount withdraw" autoComplete="off" onFocus={() => dispatch(amountActive(""))} />
								<button type="submit" className="btn-withdraw">
									Withdraw
								</button>
							</form>
						</div>
					</fieldset>
				</div>
			</div>
		</div>
	);
};

export default Withdraw;
