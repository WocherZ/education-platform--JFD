import './checks.css';

import check from '../../images/main/check_icon_top.png';

const Checks = () => {

    return (
    <div className="checks">
        <ul className="checks__list">
            <li><a href='#'><img src={check} alt='значок чека'/></a></li>
            <li><a href='#'><img src={check} alt='значок чека'/></a></li>
            <li><a href='#'><img src={check} alt='значок чека'/></a></li>
        </ul>
        <div className="hidden"></div>

    </div>);
}

export default Checks;