
import AppBar from "../components/AppBar";
import '../styles/courses/style.css'
import account from '../images/courses/account.png'
import React, { useState, useEffect } from 'react';

import {
    List,
    ListItemButton,
    ListItemText, ListSubheader,
    Collapse, ListItemIcon, ListItem, Typography
} from '@mui/material';

import { SendIcon, DraftsIcon, StarBorder, ExpandLess, ExpandMore, } from '@mui/icons-material'
import InboxIcon from '@mui/icons-material/MoveToInbox';

export default function WebDeveloper() {
    const courseId = 1
    const [modules, setModules] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [teacher, setTeacher] = React.useState([]);

    const handleClick = () => {
        setOpen(!open);
    };

    useEffect(() => {
        const getModules = async () => {
            const response = await fetch(
                `http://localhost:3001/api/modules/course/${courseId}`, {
            }
            );
            const data = await response.json();
            console.log(data.result);
            setModules(data.result);
        };
        getModules();
    }, [])

    useEffect(() => {
        const getTeacher = async () => {
            const response = await fetch(
                `http://localhost:3001/api/user/course/${courseId}`, {
            }
            );
            const data = await response.json();
            console.log(data.result);
            setTeacher(data.result);
        };
        getTeacher();
    }, [])

    return (
        <div>
            <AppBar />
            <h1>Веб-разработка</h1>
            <div id="description">
                <p>Вы изучите HTML, CSS, языки программирования JavaScript, TypeScript, библиотеку React.
                    На курсе будут сеансы парного программирования, лайвкодинг и хакатон.</p>
            </div>
            <div id="teacher">
                <div>
                    <img src={account} />
                </div>
                <p>Курс читает:
                    {
                        teacher.map(el => (
                            <p><b>{el}</b></p>
                        )
                        )
                    }
                </p>
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
                            <ListItem divider sx={{
                                "&:hover": {
                                    borderColor: "#535557",
                                }
                            }}>
                                <ListItemIcon>
                                    <StarBorder />
                                </ListItemIcon>
                                <a href='' key={el.name}>{el.name}</a>
                            </ListItem>
                        ))}
                    </List>
                </Collapse>
            </div>
        </div>
    )
}