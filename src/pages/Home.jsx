import { useSelector } from 'react-redux';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import CurrencyFormat from 'react-currency-format';

const Home = () => {
	const saldo = useSelector(state => state.account.saldo);

	return (
		<div className='container'>
			<Navbar />
			<div className="main-page">
				<Sidebar />
				<div className="main-section">
					<h1 className="main-title">Saldo anda saat ini :</h1>
					<h1 className="main-saldo"><CurrencyFormat value={saldo} displayType={'text'} thousandSeparator={true} thousandSpacing='3' prefix={'Rp. '} /></h1>
					<h3>Riwayat Transaksi :</h3>
					<p className="main-desc">Tidak ada riwayat transaksi</p>
				</div>
			</div>
		</div>
	)
};

export default Home;