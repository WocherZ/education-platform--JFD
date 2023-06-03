import React from "react";
import Navbar from "../components/my_students/Navbar";
import Header from "../components/my_students/Header";
import '../styles/my_students/style.css'

export default function MyStudent() {
    return (
        <div className="wrapper">
            <Navbar/>
            <Header/>
        </div>
    )
}