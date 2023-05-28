import React from "react";

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
    return (
        <div className="Navbar">
            <div className="label">
                <img src={label} />
            </div>
            <div className="table">
                <table>
                    <tr>
                        <td class="img">
                            <img src={dashboard}/>
                        </td>
                        <td class="text">
                            <p>Dashboard</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="img">
                            <img src={messages} />
                        </td>
                        <td class="text">
                            <p>Messages</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="img">
                            <img src={sessions} />
                        </td>
                        <td class="text">
                            <p>Sessions</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="img">
                            <img src={available} />
                        </td>
                        <td class="text">
                            <p>My Availability</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="img">
                            <img src={mystudents} />
                        </td>
                        <td class="text">
                            <p>My Students</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="img">
                            <img src={homework} />
                        </td>
                        <td class="text">
                            <p>Assign Homework</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="img">
                            <img src={wallet} />
                        </td>
                        <td class="text">
                            <p>Wallet</p>
                        </td>
                    </tr>
                    <tr>
                        <td class="img">
                            <img src={payout} />
                        </td>
                        <td class="text">
                            <p>Payout request</p>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}