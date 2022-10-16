import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar" style={{ "background-color": "rgb(28, 103, 88)" }}>
			<div className="container ">
				<Link to="/">
					<span className="fa-linked-in"></span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn textInGreen ">ESP</button>
					</Link>
					<Link to="/">
						<button className="btn textInGreen ">ENG</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};
