import React from "react";
import fotoImage from "../../img/fotoperfil.png";
import arrowImage from "../../img/downarrow.png"
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";

export const ThirdColor = () => {
    return (
        <div className="thirdColor position-relative" id="scrollspyHeading3">
            <div className="d-inline-flex ">
                <div className="container-fluid d-inline-flex ">
                    <div className="ms-5  titleBox float-start me-5 col-11">
                        <h1 className="p-5">What I've been doing...</h1>
                        <div><ul className="mt-4 ">
                            <li>
                                <p>Project Managing</p>
                            </li>
                            <li>
                                <p>Events

                                </p>
                            </li>
                            <li>
                                <p>Snowboarding</p>
                            </li>
                            <li>
                                <p>Production</p>
                            </li>
                        </ul></div>
                    </div>

                    <div className="downArrow position-relative top-50 end-0 me-5 ">
                        <ul className="nav nav-pills">
                            <li className=" nav-item">
                                <a className="arrowdark bi bi-chevron-up" href="#scrollspyHeading2"></a>
                            </li>
                            <li className="nav-item mt-4">
                                <a className="arrowdark bi bi-chevron-down" href="#scrollspyHeading4"></a>
                            </li>
                        </ul>

                    </div>
                </div></div>
        </div>
    )
}