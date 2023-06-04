import React from "react";
import './AboutUs.css';
import './AboutTutors.css';
import mission_img from './images/mission_img.svg';
import student from './images/student.svg';


function AboutUs() {
    return (
        <div className="aboutus">
            <div className="aboutus__mission">
                <div>
                    <img src = {mission_img} alt="картинка миссии" className="aboutus__mission_img"/>
                </div>
                <div className='aboutus__mission_text'>
                    VeritEd's mission is to help bridge the knowledge gap by ensuring that students get access to quality tutoring at affordable pricing. VeritEd leverages technology and an army of passionate tutors to help students learn successfully.
                </div>
            </div>
            <div className="abouttutors">
                <h1 className="abouttutors__header">Why tutors choose VeritEd?</h1>
                <div className="abouttutors__wrapper">
                    <div className="abouttutors__quotes">
                        <div className="abouttutors__quotes_text">
                            <h2 className="abouttutors__quotes_header">Exciting Mission</h2>
                            VeritEd's mission excites many of our tutors and aligns with their interests in ensuring that the knowledge gap is bridged for students so they can get a fair chance at life
                        </div>
                        <div className="abouttutors__quotes_text">
                            VeritEd's mission is to help bridge the knowledge gap by ensuring that students get access to quality tutoring at affordable pricing. VeritEd leverages technology and an army of passionate tutors to help students learn successfully.
                        </div>
                        <div className="abouttutors__quotes_text">
                            VeritEd's mission is to help bridge the knowledge gap by ensuring that students get access to quality tutoring at affordable pricing. VeritEd leverages technology and an army of passionate tutors to help students learn successfully.
                        </div>
                    </div>
                    <div>
                        <img src = {student} alt="картинка студента" className="abouttutors__img"/>
                    </div>
                    <div className="abouttutors__quotes">
                        <div className="abouttutors__quotes_text">
                            VeritEd's mission is to help bridge the knowledge gap by ensuring that students get access to quality tutoring at affordable pricing. VeritEd leverages technology and an army of passionate tutors to help students learn successfully.
                        </div>
                        <div className="abouttutors__quotes_text">
                            VeritEd's mission is to help bridge the knowledge gap by ensuring that students get access to quality tutoring at affordable pricing. VeritEd leverages technology and an army of passionate tutors to help students learn successfully.
                        </div>
                        <div className="abouttutors__quotes_text">
                            VeritEd's mission is to help bridge the knowledge gap by ensuring that students get access to quality tutoring at affordable pricing. VeritEd leverages technology and an army of passionate tutors to help students learn successfully.
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}



export default AboutUs;