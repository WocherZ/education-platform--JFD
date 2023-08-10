import React, { useState} from "react";
import Navbar from "../components/my_students/navbar.js";
import Header from "../components/my_students/Header";
import '../styles/my_students/style.css'
import Modal from '../modal/my_students/Modalroot.js'
import {Mystudentsmodal, Dashboard} from "../modal/my_students/Content.js";



export default function MyStudent() {
    const[section, setSection] = useState()
    const[modalActive, setModalActive] = useState(false)
    let component = <Dashboard />

    const modalSetHandler = (modal) => {
        setModalActive(modal)
    }

    const sectionHandler = (section) => {
            setSection(section)
    }

    component = undefined;
    if (section === 'My Students')
            {
                component = <Mystudentsmodal /> ;
            }
    else if (section === 'Dashboard')
    {
        component = <Dashboard /> ;
    }

    return (
        <div className="wrapper">
            <Navbar setactive = {modalSetHandler} setsection = {sectionHandler}/>
            <Header/>
             <Modal active={modalActive} child = {component}>
            </Modal>
        </div>
    )
}