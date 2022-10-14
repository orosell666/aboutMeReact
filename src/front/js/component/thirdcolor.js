import React from "react";
import fotoImage from "../../img/fotoperfil.png";
import arrowImage from "../../img/downarrow.png"
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Navbar } from "../component/navbar";

export const ThirdColor = () => {
    return (
        <div className="thirdColor d-inline-flex col-12" id="scrollspyHeading3">
            <div className="d-inline-flex ">
                <div className="ms-5 titleBox float-start me-5 ">
                    <h1 className="">What I've been doing...</h1>
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
    )
}