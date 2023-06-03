import React, { useState } from "react";
import Navbar from "../components/my_students/Navbar";
import Header from "../components/my_students/Header";
import '../styles/my_students/style.css'
import Modal from '../modal/my_students/Modal.js'


export default function MyStudent() {

    const[modalActive, setModalActive] = useState(false)

    return (
        <div className="wrapper">
            <Navbar setactive = {setModalActive}/>
            <Header/>
            <Modal active={modalActive} setactive = {setModalActive}/> 

            
        </div>
    )
}