import React from "react";
import { SimpleMap } from "../component/map";
import fotoImage from "../../img/fotoperfil.png";
import arrowImage from "../../img/downarrow.png"
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";

export const FourthColor = () => {
    return (
        <div className="fourthColor position-relative" id="scrollspyHeading4">
            <div className="  d-inline-flex ">
                <div className="container-fluid d-inline-flex ">
                    <div className="ms-5 titleBox float-start me-5 ">
                        <h1 className="p-5">things I like</h1>
                        <p className="mt-4">A"Lorem ipsum dolor sit emet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    </div>
                    <div className="arrowdark position-relative top-50 end-0 me-5 col-1">
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <a className="arrowdark bi bi-chevron-up" href="#scrollspyHeading3"></a>
                            </li>
                            <li className="nav-item mt-4">
                                <a className="arrowdark bi bi-chevron-double-up" href="#scrollspyHeading2"></a>
                            </li>

                        </ul>

                    </div>
                </div>
            </div>

            <div className="container-fluid justify-content-center mb-5">
                < SimpleMap />
            </div>
        </div>
    )
}