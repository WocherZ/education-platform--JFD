import React, { useRef, useState } from "react";

import label from '../../images/my_students/label.png';
import dashboard from '../../images/my_students/dashboard.png';
import messages from '../../images/my_students/messages.png';
import sessions from '../../images/my_students/sessions.png';
import available from '../../images/my_students/available.png';
import mystudents from '../../images/my_students/mystudents.png';
import homework from '../../images/my_students/homework.png';
import wallet from '../../images/my_students/wallet.png';
import payout from '../../images/my_students/payout.png';
import '../../styles/my_students/style.css'






export default function Navbar() {
    
    const handleClick = (e) => {
        e.target.style.color = "rgb(0, 171, 189)"
    };
    const images = [

        {
            name: 'Dashboard',
            path: dashboard
        },
        {
            name: 'Messages',
            path: messages
        },
        {
            name: 'Sessions',
            path: sessions
        },
        {
            name: 'My Availability',
            path: available
        },
        {
            name: 'My Students',
            path: mystudents
        },
        {
            name: 'Assign Homework',
            path: homework
        },
        {
            name: 'Wallet',
            path: wallet
        },
        {
            name: 'Payout request',
            path: payout
        }
    ]
    return (
        <div className="navbar">
            <div className="label">
                <img src={label} />
            </div>
            <div className="table">
                <table>
                    {
                        images.map(image => (
                            <tr onClick={handleClick} >
                                <td className="img">
                                    <img src={image.path} />
                                </td>
                                <td >
                                    <p><a href="">{image.name}</a></p>
                                </td>
                            </tr>
                        )
                        )
                    }
                </table>
            </div>
        </div>
    )
}