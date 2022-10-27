import React from "react";
import fotoImage from "../../img/garagedef.png";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";

export const FirstColor = () => {
    return (
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
                            <a className="downArrow bi bi-chevron-down" href="#scrollspyHeading2"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}