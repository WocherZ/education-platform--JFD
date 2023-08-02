import './main_top.css';
import { Button, Typography } from "@mui/material";
import Checks from './Checks';
import Brands from './Brands';

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
            <div variant='body1' className='main_text'>
                A solution for easy and flexible online learning, you can study<br></br> anywhere and at anytime on this platform
            </div>
            <div className='main_text-line'></div>
            <div className='main_top__image'></div>
            <div className='main_top__actions'>
                <button className='button_top'>Join For Free</button>
                <div className='play_icon'></div>
                <div className='play_text'>Play Now</div>
            </div>
        </div>

    </section>);
}

export default MainTop;

{/* <div className="main_top__brands">
    <div className="main_top__brands-wrapper">
        <div className="main_top__brand"></div>
        <div className="main_top__brand"></div>
        <div className="main_top__brand"></div>
        <div className="main_top__brand"></div>
        <div className="main_top__brand"></div>
        <div className="main_top__brand"></div>
    </div>
    </div>
</div> */}