import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot2.png";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
                className="left-column"
                style={{
                    background: "url(" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />
            
            <div className="right-column">
                I need to think up some really great stuff about myself to put here!!!
            </div>
        </div>
    );
}