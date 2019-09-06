import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactPagePicture from "../../../static/assets/images/auth/login.jpg";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
                className="left-column"
                style={{
                    background: "url(" + contactPagePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />
            
            <div className="right-column">
              <div className="contact-bullet-points">


                <div className="bullet-point-group">
                    <div className="icon">
                        <FontAwesomeIcon icon="phone-volume"/>
                    </div>
                    <div className="text">
                        555-555-5555
                    </div>
                </div>
                <div className="bullet-point-group">
                    <div className="icon">
                        <FontAwesomeIcon icon="at"/>
                    </div>
                    <div className="text">
                        sample@sample.com
                    </div>
                </div>
                <div className="bullet-point-group">
                    <div className="icon">
                        <FontAwesomeIcon icon="map-marked-alt"/>
                    </div>
                    <div className="text">
                        Sylvan Grove, KS
                    </div>
                </div>


              </div>
              
            </div>
        </div>
    );
}

// export default function() {
//     return (
//         <div className="content-page-wrapper">

//             <input 
//                 type="text"
//                 name="Name"
//                 placeholder="Name"

//             />
//             <input 
//             type="email"
//             name="email"
//             placeholder="Email"

//             />
            
//             <input 
//             type="text"
//             name="name"
//             placeholder="text"

//             />

//             <div>
//             <button className="btn" type="submit">Save</button>
//             </div>
//         </div>
//     );
// }

