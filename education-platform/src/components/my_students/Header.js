import React, { useRef, useState } from "react";

import loupe from '../../images/my_students/loupe.png';
import '../../styles/my_students/style.css'






export default function Header() {
    
    // const handleClick = (e) => {
    //     e.target.style.color = "rgb(0, 171, 189)"
    // };
    // const images = [

    //     {
    //         name: 'Dashboard',
    //         path: dashboard
    //     },
    //     {
    //         name: 'Messages',
    //         path: messages
    //     },
    //     {
    //         name: 'Sessions',
    //         path: sessions
    //     },
    //     {
    //         name: 'My Availability',
    //         path: available
    //     },
    //     {
    //         name: 'My Students',
    //         path: mystudents
    //     },
    //     {
    //         name: 'Assign Homework',
    //         path: homework
    //     },
    //     {
    //         name: 'Wallet',
    //         path: wallet
    //     },
    //     {
    //         name: 'Payout request',
    //         path: payout
    //     }
    // ]
    return (
        <div className="header">
            <div class="search">
            <div class="search_input">
                    <input type="text" src={loupe} placeholder="Search verited"/>
                </div>
            </div>

        </div>
    )
}