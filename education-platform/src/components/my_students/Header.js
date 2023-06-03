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
                <img src={bell} />
                </div>
                <div className="settings">
                <img src={settings} />
                </div>
                <div className="account">
                <img src={account} />
                </div>
        </div>
    )
}