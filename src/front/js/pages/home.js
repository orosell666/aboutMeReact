import React, { useContext } from "react";
import { Context } from "../store/appContext";
import fotoImage from "../../img/fotoperfil.png";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div>
			<nav className="navbar" style={{ "background-color": "rgb(28, 103, 88)" }}>
				<div className="container ">
					<Link to="/">
						<span className="navbar-brand mb-0 h1"></span>
					</Link>
					<div className="ml-auto">
						<Link to="/demo">
							<button className="btn textInGreen ">ESP</button>
						</Link>
						<Link to="/">
							<button className="btn textInGreen invisible">ENG</button>
						</Link>
					</div>
				</div>
			</nav>

			<div className="firstColor " id="scrollspyHeading1">

				<div className="d-inline-flex ">
					<div className="ms-5 titleBox float-start me-5 ">
						<p>
							<img className=" col-sm-3 img-fluid" src={fotoImage} />
						</p>
						<h1 className="">Oriol Rosell</h1>
						<p>About me...</p>
					</div>
					<div className="downArrow ms-5 align-self-center me-5 ">
						<ul className="nav nav-pills">
							<li className="nav-item">
								<a className="downArrow" href="#scrollspyHeading2">+</a>
							</li>
						</ul>

					</div>
				</div>
			</div>
			<div className="secondColor" id="scrollspyHeading2">
				<div className="d-flex flex-column bd-highlight mb-3">
					<h1 className="ms-5">Oriol Rosell</h1>
					<p className="ms-5">About me...</p>
				</div>
				<div className="downArrow ms-5 align-self-center me-5 ">
					<ul className="nav nav-pills">
						<li className="nav-item">
							<a className="downArrow" href="#scrollspyHeading1">+</a>
						</li>
						<li className="nav-item mt-4">
							<a className="downArrow" href="#scrollspyHeading3">-</a>
						</li>
					</ul>

				</div>
			</div>
			<div className="thirdColor" id="scrollspyHeading3">
				<div className="d-flex flex-column bd-highlight mb-3">
					<h1 className="ms-5">Oriol Rosell</h1>
					<p className="ms-5">About me...</p>
				</div>
				<div className="downArrow ms-5 align-self-ce mt-4nter me-5 ">
					<ul className="nav nav-pills">
						<li className="nav-item">
							<a className="downArrow" href="#scrollspyHeading2">+</a>
						</li>
						<li className="nav-item">
							<a className="downArrow" href="#scrollspyHeading4">-</a>
						</li>
					</ul>

				</div>
			</div>
			<div className="fourthColor" id="scrollspyHeading4">
				<div className="d-flex flex-column bd-highlight mb-3">
					<h1 className="ms-5">Oriol Rosell</h1>
					<p className="ms-5">About me...</p>
				</div>
				<div className="downArrow ms-5 align-self-center me-5 ">
					<ul className="nav nav-pills">
						<li className="nav-item">
							<a className="downArrow" href="#scrollspyHeading3">+</a>
						</li>
					</ul>

				</div>
			</div>


		</div>

	);
};