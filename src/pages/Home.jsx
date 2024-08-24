import { useSelector } from 'react-redux';

const Home = () => {
	const tabungan = useSelector(state => state.account.tabungan);

	return (
		<div>
			<h1>Tabungan</h1>
			<p>Saldo : Rp. {tabungan},-</p>
		</div>
	)
};

export default Home;