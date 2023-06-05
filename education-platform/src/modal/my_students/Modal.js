import React from "react";
import '../../styles/my_students/style.css'

const Modal = ({ active, setActive }) => {
    return (
        <div>
            <div className={active ? "modal active" : "modal"} >
                <h3>My Students</h3>
                <table className="table-my-students">
                    <tr>
                        <th>#</th><th>Student name</th><th>Assignments</th><th>Submited</th><th>Test</th><th>Status</th>
                    </tr>
                    <tr>
                        <td></td><td></td><td></td><td></td><td></td><td></td>
                    </tr>
                </table>
                {/* <div className="modal__content" onClick={e => e.stopPropagation()}></div> */}
            </div>
        </div>
    )
};

export default Modal;
