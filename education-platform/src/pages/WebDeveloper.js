
import AppBar from "../components/AppBar";
import '../styles/courses/style.css'
import account from '../images/courses/account.png'
import React, { useState, useEffect } from 'react';
// import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCourse, fetchModules, fetchTeachers } from "../asyncAction/course";
// import { useNavigate } from 'react-router-dom';

import {
    List,
    ListItemButton,
    ListItemText, ListSubheader,
    Collapse, ListItemIcon, ListItem, Typography
} from '@mui/material';

import { SendIcon, DraftsIcon, StarBorder, ExpandLess, ExpandMore, } from '@mui/icons-material'
import InboxIcon from '@mui/icons-material/MoveToInbox';

export default function WebDeveloper() {
    // const isAuth = useSelector(state => state.user.isAuth);
    // console.log("isAuth", isAuth);
    // const userId = useSelector(state => state.user.userId);
    // const token = useSelector(state => state.user.token);

    const params = useParams();
    const courseId = params.id;
    // console.log("params", params);
    const [course, setCourse] = React.useState({id: 0, name: '', picture: null, description: null, userId: 0});
    const [modules, setModules] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [teacher, setTeacher] = React.useState([]);

    const handleClick = () => {
        setOpen(!open);
    };

    useEffect(() => {
        const getCourse = async () => {
            if (courseId > 0){
            const data = await fetchCourse(courseId)
            // console.log("getCourse", data.result);
            if (data.result) {
                setCourse(data.result);
            }
            };
        }
            getCourse();

    }, [courseId])

    useEffect(() => {
        const getModules = async () => {
            const data = await fetchModules( courseId);
            // const data = await response.json();
            // console.log(data.result);
            setModules(data.result);
        };
        getModules();
    }, [courseId])

    useEffect(() => {
        const getTeacher = async () => {
            const data = await fetchTeachers(courseId);
            // const data = await response.json();
            // console.log(data.result);
            setTeacher(data.result);
        };
        getTeacher();
    }, [courseId])

    return (
    <div>
        <AppBar />
        { course.id > 0    ?
        <div>
            {/* <AppBar /> */}
            <h1>{course.name}</h1>
            <div id="description">
                <p>{course.description}</p>
            </div>
            <div id="teacher">
                <div>
                    <img src={account} />
                </div>
                <div>Курс читает:
                    {
                        teacher.map(el => (
                            <p key={el}><b>{el}</b></p>
                        )
                        )
                    }
                </div>
            </div>
            <div id="modules-menu">
                <ListItemButton onClick={handleClick}>
                    <Typography variant="button" display="block" sx={{ fontSize: '20px' }} gutterBottom>
                        Модули
                        {open ? <ExpandLess /> : <ExpandMore />}
                    </Typography>
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        {modules.map(el => (
                            <ListItem key={el.name} divider sx={{
                                "&:hover": {
                                    borderColor: "#535557",
                                }
                            }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <a href='#' >{el.name}</a>
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
            </div>
            </div>    
            :
            <Typography>
                Такого курса не существует.
            </Typography>
        }
        </div>
    )
}