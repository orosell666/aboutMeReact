import React, { useContext } from "react";
import { Context } from "../store/appContext";
import fotoImage from "../../img/garagedef.png";
import arrowImage from "../../img/downarrow.png"
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";




export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="firstColor " id="scrollspyHeading1">
				<Navbar />
				<div className="d-inline-flex">

					<div className="jsutify-content-center ">
						<p>
							<img className=" col-sm-10 img-fluid garage" src={fotoImage} />
						</p>

					</div>


					<div className="downArrow  position-absolute top-50 end-0 me-5 col-1">
						<ul className="nav nav-pills">
							<li className="nav-item">
								<a class="downArrow bi bi-chevron-down" href="#scrollspyHeading2"></a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="secondColor d-inline-flex" id="scrollspyHeading2">

				<div className="d-inline-flex">
					<div className="ms-5 titleBox float-start me-5 ">
						<h1 className="p-5">introducción</h1>
						<p className="mt-4">A"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
					</div>

				</div>
				<div className="downArrow  position-relative top-50 end-0 me-5  ">
					<ul className="nav nav-pills">
						<li className="nav-item">
							<a className="downArrow bi bi-chevron-up" href="#scrollspyHeading1"></a>
						</li>
						<li className="nav-item mt-4">
							<a class="downArrow bi bi-chevron-down" href="#scrollspyHeading3"></a>
						</li>
					</ul>
				</div>
			</div>
			<div className="thirdColor d-inline-flex col-12" id="scrollspyHeading3">
				<div className="d-inline-flex ">
					<div className="ms-5 titleBox float-start me-5 ">
						<h1 className="p-5">Que he estado haciendo...</h1>
						<ul className="mt-4 ">
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
					<div className="downArrow position-relative top-50 end-0 me-5 col-1 ">
						<ul className="nav nav-pills">
							<li className=" nav-item">
								<a class="arrowdark bi bi-chevron-up" href="#scrollspyHeading2"></a>
							</li>
							<li className="nav-item mt-4">
								<a class="arrowdark bi bi-chevron-down" href="#scrollspyHeading4"></a>
							</li>
						</ul>

					</div>
				</div></div>
			<div className="fourthColor d-inline-flex" id="scrollspyHeading4">
				<div className="d-inline-flex ">
					<div className="ms-5 titleBox float-start me-5 ">
						<h1 className="p-5">Y también...</h1>
						<p className="mt-4">A"Lorem ipsum dolor sit emet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
					</div>
					<div className="arrowdark position-relative top-50 end-0 me-5 col-1">
						<ul className="nav nav-pills">
							<li className="nav-item">
								<a class="arrowdark bi bi-chevron-up" href="#scrollspyHeading3"></a>
							</li>
							<li className="nav-item mt-4">
								<a class="arrowdark bi bi-chevron-double-up" href="#scrollspyHeading2"></a>
							</li>

						</ul>

					</div>
				</div>


			</div>
		</div>

	);
};