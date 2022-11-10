import React from "react";
import "../../styles/home.css";
import { SimpleMap } from "../component/map";


export const SecondColor = () => {

    return (
        <div className="secondColor d-inline-flex" id="scrollspyHeading2">

            <div className="d-inline-flex">
                <div className="ms-5 titleBox float-start me-5 ">
                    <h1 className="p-5">endtroduction</h1>
                    <p className="mt-4">A"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
                <div>
                    < SimpleMap />
                </div>

            </div>
            <div className="downArrow  position-relative top-50 end-0 me-5  ">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="downArrow bi bi-chevron-up" href="#scrollspyHeading1"></a>
                    </li>
                    <li className="nav-item mt-4">
                        <a className="downArrow bi bi-chevron-down" href="#scrollspyHeading3"></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}