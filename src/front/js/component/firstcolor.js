import React from "react";
import fotoImage from "../../img/garagedef.png";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { Link } from "react-router-dom";

export const FirstColor = () => {
    return (
        <div className="firstColor " id="scrollspyHeading1">
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

                        </div>
                    </div>

                </div>
            </nav>
            <div className="d-inline-flex">

                <div className="jsutify-content-center ">
                    <p>
                        <img className=" col-sm-10 img-fluid garage" src={fotoImage} />
                    </p>

                </div>


                <div className="downArrow  position-absolute top-50 end-0 me-5 col-1">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="downArrow bi bi-chevron-down" href="#scrollspyHeading2"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}