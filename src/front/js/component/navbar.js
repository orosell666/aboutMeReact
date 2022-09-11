import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar" style={{ "background-color": "rgb(28, 103, 88)" }}>
			<div className="container ">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"></span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn textInGreen">ESP</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
