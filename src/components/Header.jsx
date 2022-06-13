import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
function Header() {
	return (
		<header className="header">
			<div className="logo">
				<NavLink to="/">GoalSeater</NavLink>
			</div>
			<ul>
				<li>
					<NavLink to="/login">
						<FaSignInAlt />
						Login
					</NavLink>
				</li>
				<li>
					<NavLink to="/register">
						<FaUser />
						Register
					</NavLink>
				</li>
			</ul>
		</header>
	);
}

export default Header;
