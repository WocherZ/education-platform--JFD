import React, { useRef, useState } from "react";

import loupe from '../../images/my_students/loupe.png';
import bell from '../../images/my_students/bell.png';
import settings from '../../images/my_students/settings.png';
import account from '../../images/my_students/account.png';
import '../../styles/my_students/style.css'



export default function Header() {

    return (
        <div className="header">
            <div class="search_input">
                <input type="text" src={loupe} placeholder="Search verited" />
            </div>
            <div className="empty">
            </div>
            <div className="notice">
                <a href=""><img src={bell} /></a>

            </div>
            <div className="settings">
                <a href=""><img src={settings} /></a>
            </div>
            <div className="account">
                <a href=""><img src={account} /></a>
        </div>
        </div >
    )
}