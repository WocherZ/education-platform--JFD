import React from "react";
import '../../styles/my_students/style.css'


export function Mystudentsmodal(){
    return (
        <div>
            <h3>My Students</h3>
            <table className="table-my-students">
                <tr>
                    <th>#</th><th>Student name</th><th>Assignments</th><th>Submited</th><th>Test</th><th>Status</th>
                </tr>
                <tr>
                    <td></td><td></td><td></td><td></td><td></td><td></td>
                </tr>
            </table>
        </div>
    )
};

export function Dashboard() {
    return (
        <div>
            <h3>Dashboard</h3>
        <div className="dashboard">
            
                <div className="lessons">
                </div>
                <div className="students">
                </div>

        </div>
        </div>
    )
};

