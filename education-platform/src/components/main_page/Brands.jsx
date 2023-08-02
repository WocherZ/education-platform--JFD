import './brands.css';

import adobe from '../../images/main/adobe_icon.svg';
import udemy from '../../images/main/udemy_icon.svg';
import coursera from '../../images/main/coursera_icon.svg';
import google from '../../images/main/google_icon.svg';
import facebook from '../../images/main/facebook_icon.svg';
import zoom from '../../images/main/zoom_icon.svg';

const Brands = () => {

    return (
        <div className="brands">
            <ul className="brands__list">
                <li><a href='#'><img src={adobe} alt='значок чека' className='brand'/></a></li>
                <li><a href='#'><img src={udemy} alt='значок чека' className='brand'/></a></li>
                <li><a href='#'><img src={coursera} alt='значок чека' className='brand'/></a></li>
                <li><a href='#'><img src={google} alt='значок чека' className='brand'/></a></li>
                <li><a href='#'><img src={facebook} alt='значок чека' className='brand'/></a></li>
                <li><a href='#'><img src={zoom} alt='значок чека' className='brand'/></a></li>
            </ul>
        </div>);
}

export default Brands;