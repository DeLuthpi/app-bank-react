import '../assets/css/navbar-style.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import { themeLight, themeDark } from "../redux/slices/themeSlice"

const Navbar = () => {
	const theme = useSelector(state => state.theme.darkMode);
	const dispatch = useDispatch();
	const handleDark = () => dispatch(themeDark());
	const handleLight = () => dispatch(themeLight());

	return (
		<nav className="navbar">
			<div className="nav-logo">
				<Link to='/'><h2>Bank Bung&ensp;<FontAwesomeIcon icon="fa-solid fa-bug" /></h2></Link>
			</div>
			<div className="nav-theme">
				<span>Theme</span>&ensp;<FontAwesomeIcon className="icon-theme" onClick={theme ? handleLight : handleDark} icon={ theme ? "fa-solid fa-moon" : "fa-solid fa-sun"} />
			</div>
		</nav>
	);
};

export default Navbar;