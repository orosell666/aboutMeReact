import React from "react";
import fotoImage from "../../img/fotoperfil.png";
import arrowImage from "../../img/downarrow.png"
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";

export const FirstColor = () => {
    return (
        <div className="firstColor " id="scrollspyHeading1">
            <Navbar />
            <div className="d-inline-flex">

                <div className="ms-5 titleBox float-none me-5 ">
                    <p>
                        <img className=" col-sm-3 img-fluid" src={fotoImage} />
                    </p>
                    <h1 className="">Oriol Rosell</h1>
                    <p> Wellcome to my Garage</p>
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
    )
}