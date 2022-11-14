import React from "react";
import "../../styles/home.css";



export const SecondColor = () => {

    return (
        <div className="secondColor position-relative " id="scrollspyHeading2">
            <div className="  d-inline-flex ">
                <div className="container-fluid d-inline-flex">
                    <div className="ms-5 titleBox float-start me-5 col-11">
                        <h1 className="p-5">endtroduction</h1>
                        <p className="mt-4">I've always been in the need to create, create from the very beginning and develope it until something goog is reached, and, when it works, make it better. And if you are sorrounded by a good team environment, the better comes alone. I started managing projects with a group of friends, so the environment, the participation and opinion of each member was always listen and valued. And that is the way I understand project managing, keeping the team esteem high and focused. Nice! But not all the time possible...</p>
                        <p>I have formation as a Project Manager, and as a Scrum Master. And I have been managing national and international teams around Europe, always with and Agile attitude and taking decisions when it had to be done assuming the consequences.  </p>
                        <p>Now, focused in the new path in the coding and IT</p>
                        <p>You can check what I have been in to until now beneath these lines.</p>
                    </div>
                </div>

                <div className="downArrow  position-absolute top-50 end-0 translate-middle-y   me-5 col-1 ">
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

        </div>
    )
}