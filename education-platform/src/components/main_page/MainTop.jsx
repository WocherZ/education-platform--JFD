import './main_top.css';
import { Button, Typography } from "@mui/material";
import Checks from './Checks';
import Brands from './Brands';
import Social from './Social_networks';

const MainTop = () => {

    return (<section className='main_top'>
        <Checks></Checks>
        <Brands></Brands>
        
        <div className="main_top__wrapper">
            <Typography variant="text" className="main_top__header">
                Access Your Class From<br></br>
            </Typography>
            <Typography variant="text" className="main_top__header main_top__header-blue">
                Anywhere & Anytime
            </Typography>
            <div className='main_text'>
                A solution for easy and flexible online learning, you can study<br></br> anywhere and at anytime on this platform
            </div>
            <div className='main_text-line'></div>
            <div className='main_top__image'></div>
            <div className='main_top__actions'>
                <button className='button_top'>Join For Free</button>
                <div className='play_icon'><a href='#'></a></div>
                <div className='play_text'>Play Now</div>
            </div>
        </div>

        <Social></Social>

        <div className='links'>
            <div className='links_link'>Experienced Instructors</div>
            <div className='links_link'>Quality Videos</div>
            <div className='links_link'>Affordable Prices</div>
        </div>

    </section>);
}

export default MainTop;

