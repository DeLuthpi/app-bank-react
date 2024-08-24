import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from "react-redux"
import { withdraw } from "../redux/slices/accountSlice"
import '../assets/css/transaction-style.css'
import CurrencyFormat from 'react-currency-format';

const Withdraw = () => {
	const saldo = useSelector(state => state.account.saldo);
	
	const dispatch = useDispatch();
	const handleWithdraw = (e) => {
		e.preventDefault();
		const amount = e.target.withdraw.value;
		dispatch(withdraw(parseInt(amount)));
		e.target.withdraw.value = 0;
	}

	return (
		<div className='container'>
			<Navbar />
			<div className="main-page">
				<Sidebar />
				<div className="main-section">
					<h1 className="main-title">Saldo anda saat ini :</h1>
					<h1 className="main-saldo"><CurrencyFormat value={saldo} displayType={'text'} thousandSeparator={true} thousandSpacing='3' prefix={'Rp. '} /></h1>
					<div className="form-transaction">
						<h3 className="title-form">Silahkan input jumlah withdraw anda :&emsp;</h3>
						<form onSubmit={handleWithdraw}>
							<input type="number" name="withdraw" className="form-control" placeholder="Input amount withdraw" />
							<button type="submit" className="btn-withdraw">Withdraw</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Withdraw;