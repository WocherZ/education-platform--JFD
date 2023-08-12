import './checks.css';

import check from '../../images/main/check_icon_top.png';

const Checks = () => {

    return (
    <div className="checks">
        <ul className="checks__list">
            <li><img src={check} alt='значок чека'/></li>
            <li><img src={check} alt='значок чека'/></li>
            <li><img src={check} alt='значок чека'/></li>
        </ul>
        <div className="hidden"></div>

    </div>);
}

export default Checks;