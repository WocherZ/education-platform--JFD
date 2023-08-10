import React from "react";
import '../../styles/my_students/style.css'

const Modal = (props) => {
    return (
        <div>
            <div className={props.active ? "modal active" : "modal"} >
                {props.child}

            </div>
        </div>
    )
};

export default Modal;
