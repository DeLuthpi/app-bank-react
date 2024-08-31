import "../assets/css/navbar-style.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { themeLight, themeDark } from "../redux/slices/themeSlice";
import logoImage from "../assets/images/logo.png";

const Navbar = () => {
	const theme = useSelector((state) => state.theme.darkMode);
	const dispatch = useDispatch();
	const handleDark = () => dispatch(themeDark());
	const handleLight = () => dispatch(themeLight());

	return (
		<nav className="navbar">
			<div className="nav-logo">
				<Link to="/">
					<h2>Bank Bung</h2>
				</Link>
				<img src={logoImage} className="logo-img" alt="logo-img" />
			</div>
			<div className="nav-theme">
				<input type="checkbox" id="switch" className="checkbox" defaultChecked={theme ? true : false} onClick={theme ? handleLight : handleDark} />
				<label htmlFor="switch" className="toggle">
					<FontAwesomeIcon icon="fa-solid fa-sun" className="icon-light" inverse />
					<FontAwesomeIcon icon="fa-solid fa-moon" className="icon-dark" inverse />
				</label>
			</div>
		</nav>
	);
};

export default Navbar;
