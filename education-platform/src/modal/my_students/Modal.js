import React from "react";
import '../../styles/my_students/style.css'

const Modal = ({ active, setActive }) => {
    return (
        <div className={active ? "modal active" : "modal"} >
            {/* <div className="modal__content" onClick={e => e.stopPropagation()}></div> */}
        </div>
    )
};

export default Modal;
