import '../assets/css/sidebar-style.css';
import { Link } from 'react-router-dom';
import { sidebarMenu } from "../helpers/const";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector, useDispatch } from 'react-redux';
import { menuActive } from "../redux/slices/menuSlice"

const Sidebar = () => {
	const isActive = useSelector(state => state.menu.pageActive);
	const dispatch = useDispatch();
	const handleActive = () => {
		dispatch(menuActive());
	}

	return (
		<aside className="sidebar">
			<div className="sidebar-nav">
				<ul className="nav-list">
					{sidebarMenu?.map((list) => {
						return (
							<li className="nav-item" key={list?.id}>
								<Link className={`nav-link ${isActive === list?.navRoute ? "active" : ""}`} to={list?.navRoute} onClick={handleActive(list?.navRoute)}>
									<div className="icon icon-page">
										<FontAwesomeIcon icon={list?.navIcon} />
									</div>
									<span className="nav-link-text ms-1">{list?.navName}</span>
								</Link>
							</li>
						)
					})}
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;