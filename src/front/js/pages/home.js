import React, { useContext } from "react";
import { Context } from "../store/appContext";
import fotoImage from "../../img/fotoperfil.png";
import arrowImage from "../../img/downarrow.png"
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
								<a className="downArrow fas fa-angle-down" href="#scrollspyHeading2"></a>
							</li>
						</ul>

					</div>
				</div>
			</div>
			<div className="secondColor" id="scrollspyHeading2">
				<div className="d-inline-flex ">
					<div className="ms-5 titleBox float-start me-5 ">
						<h1 className="">endtroduction</h1>
						<p className="mt-4">A"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
					</div>
					<div className="downArrow ms-5 align-self-center me-5 ">
						<ul className="nav nav-pills">
							<li className="nav-item">
								<a className="downArrow fas fa-angle-up" href="#scrollspyHeading1"></a>
							</li>
							<li className="nav-item mt-4">
								<a className="downArrow fas fa-angle-down" href="#scrollspyHeading3"></a>
							</li>
						</ul>

					</div>
				</div></div>
			<div className="thirdColor" id="scrollspyHeading3">
				<div className="d-inline-flex ">
					<div className="ms-5 titleBox float-start me-5 ">
						<h1 className="">What I've been doing...</h1>
						<ul className="mt-4">
							<li>
								<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
							</li>
							<li>
								<p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.

								</p>
							</li>
							<li>
								<p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi</p>
							</li>
							<li>
								<p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies</p>
							</li>
							<li>
								<p>Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
							</li>
							<li>
								<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
							</li>
						</ul>
					</div>
					<div className="upArrow ms-5 align-self-center me-5 ">
						<ul className="nav nav-pills">

							<li className="nav-item">
								<a id="arrowdark fas fa-angle-up" href="#scrollspyHeading2"></a>
							</li>
							<li className="nav-item mt-4">
								<a id="arrowdark fas fa-angle-down" href="#scrollspyHeading4"></a>
							</li>
						</ul>

					</div>
				</div></div>
			<div className="fourthColor" id="scrollspyHeading4">
				<div className="d-inline-flex ">
					<div className="ms-5 titleBox float-start me-5 ">
						<h1 className="">things I like</h1>
						<p className="mt-4">A"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
					</div>
					<div className="upArrow ms-5 align-self-center me-5 " >
						<ul className="nav nav-pills">
							<li className="nav-item">
								<a id="arrowdark fas fa-angle-up" href="#scrollspyHeading3"></a>
							</li>
						</ul>

					</div>
				</div>

			</div>
		</div>

	);
};