import './social_networks.css';

import facebook from '../../images/main/facebook_blue.svg';
import twitter from '../../images/main/twitter_blue.svg';
import youtube from '../../images/main/youtube_blue.svg';
import insta from '../../images/main/in_blue.svg';
import q from '../../images/main/q_blue.svg';

const Social = () => {

    return (
    <div className="social_networks">
        <ul className="social_networks__list">
            <li><a href='#'><img src={facebook} alt='значок чека'/></a></li>
            <li><a href='#'><img src={twitter} alt='значок чека'/></a></li>
            <li><a href='#'><img src={insta} alt='значок чека'/></a></li>
            <li><a href='#'><img src={youtube} alt='значок чека'/></a></li>
            <li><a href='#'><img src={q} alt='значок чека'/></a></li>
        </ul>
        <div className="hidden"></div>

    </div>);
}

export default Social;