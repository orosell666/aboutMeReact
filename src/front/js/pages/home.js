import React, { useContext } from "react";
import { Context } from "../store/appContext";
import fotoImage from "../../img/fotoperfil.png";
import "../../styles/home.css";

export const Home = () => {
	return (
		<div>

			<div className="firstColor ">

				<div className="d-inline-flex ">
					<div className="ms-5 titleBox float-start me-5 ">
						<p>
							<img className=" col-sm-3 img-fluid" src={fotoImage} />
						</p>
						<h1 className="">Oriol Rosell</h1>
						<p>About me...</p>
					</div>
					<div className="downArrow ms-5 align-self-center me-5 ">
						<span aria-hidden="true">V<i class="fa-solid fa-circle-chevron-down" /></span>
					</div>
				</div>
			</div>
			<div className="secondColor">
				<div className="d-flex flex-column bd-highlight mb-3">
					<h1 className="ms-5">Oriol Rosell</h1>
					<p className="ms-5">About me...</p>
				</div>
			</div>
			<div className="thirdColor">
				<div className="d-flex flex-column bd-highlight mb-3">
					<h1 className="ms-5">Oriol Rosell</h1>
					<p className="ms-5">About me...</p>
				</div>
			</div>
			<div className="fourthColor">
				<div className="d-flex flex-column bd-highlight mb-3">
					<h1 className="ms-5">Oriol Rosell</h1>
					<p className="ms-5">About me...</p>
				</div>
			</div>


		</div>

	);
};