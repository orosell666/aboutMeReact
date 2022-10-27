import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {


	return (
		<nav className="navbar" style={{ "backgroundColor": "rgb(28, 103, 88)" }}>
			<div className="container ">
				<Link to="/">
					<span className="fa-linked-in"></span>
				</Link>
				<div>
					<div className="ml-auto">
						<Link to="/demo">
							<button type="button" className="btn active  textInGreen" >ESP</button>
						</Link>
						<Link to="/">
							<button className="btn  textInGreen" >ENG</button>
						</Link>
					</div>
				</div>

			</div>
		</nav>
	);
};
