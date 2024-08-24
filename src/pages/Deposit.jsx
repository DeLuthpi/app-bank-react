import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from "react-redux"
import { deposit } from "../redux/slices/accountSlice"
import '../assets/css/deposit-style.css'
import CurrencyFormat from 'react-currency-format';

const Deposit = () => {
	const saldo = useSelector(state => state.account.saldo);
	
	const dispatch = useDispatch();
	const handleDeposit = (e) => {
		e.preventDefault();
		const amount = e.target.deposit.value;
		dispatch(deposit(parseInt(amount)));
		e.target.deposit.value = 0;
	}

	return (
		<div className='container'>
			<Navbar />
			<div className="main-page">
				<Sidebar />
				<div className="main-section">
					<h1 className="main-title">Saldo anda saat ini :</h1>
					<h1 className="main-saldo"><CurrencyFormat value={saldo} displayType={'text'} thousandSeparator={true} thousandSpacing='3' prefix={'Rp. '} /></h1>
					<div className="form-deposit">
						<h3 className="title-form">Silahkan input jumlah deposit anda :&emsp;</h3>
						<form onSubmit={handleDeposit}>
							<input type="number" name="deposit" className="form-control" placeholder="Input deposit" />
							<button type="submit" className="btn-submit">Deposit</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Deposit;