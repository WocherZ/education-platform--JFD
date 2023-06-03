import React from "react";
import './AboutUs.css';
import mission_img from './images/mission_img.svg';


export default function Footer() {
    return (
        <div className="aboutus">
            <div className="aboutus__mission">
                <div>
                    <img src = {mission_img} alt = "картинка миссии" className="aboutus__mission_img"/>
                </div>
                <div className='aboutus__mission_text'>
                    VeritEd's mission is to help bridge the knowledge gap by ensuring that students get access to quality tutoring at affordable pricing. VeritEd leverages technology and an army of passionate tutors to help students learn successfully.
                </div>
            </div>
        </div>
    )
}