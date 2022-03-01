import React from "react";
import './Team.css'
import axios from "axios/index";

const Team = () => {
    return (<div>
        <div className="container transcript">
            <div className="text-centre"><h1 className="color-dark">Our Team</h1></div>
            <div className="row">
                <div className="col-md-12">
                    <img src="/team.jpeg" style={{ "width": "100%" }} alt="" />
                </div>
            </div>
        </div>
    </div>)
}

export default Team;