"use client"
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Divider from '@mui/material/Divider';

import IconButton from '@mui/material/IconButton';
import MenuIcon from "@mui/icons-material/Menu";
import { HeaderProperties } from '@/app/types/data-types';

export default function Header({title, drawerItems, menus}:HeaderProperties) {
    const classes = {
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: 2
        },
        title: {
            flexGrow: 1,
        },
        list: {
            width: 250,
            backgroundColor: "black",
            color: "white",
            height: "100%"
        },
    };
    const [state, setState] = React.useState({
        drawerClosed: true,
    });

    let active = 1;
    switch(title){
        case "Kezdőlap":
            active = 0;
            break;
        case "Itallap":
            active = 1;
            break;
        case "Hírek":
            active = 2;
            break;
        case "Galléria":
            active = 3;
            break;
    }
    const toggleDrawer = (open:boolean) => {
        setState({ drawerClosed: open });
    };

    const navigate = (destination:string) => {
        window.location.href = destination;
    }

    return (
        <div style={classes.root}>
            <AppBar position="fixed">
                <Drawer anchor={"right"} open={!state.drawerClosed} onClose={() => toggleDrawer(true)}>
                    <div style={classes.list}>
                        <List>
                            {drawerItems.map((item, index) => {
                                return (
                                    <React.Fragment key={item.id}>
                                        <ListItem button>
                                            <ListItemText primary={item.title} onClick={() => {
                                                if(item.url){navigate(item.url)}}
                                            }/>
                                        </ListItem>
                                        <Divider style={{ backgroundColor: "rgb(255 255 255 / 12%)" }} />
                                        {item.items.map((x => {
                                            return (
                                                <ListItem key={x}>
                                                    <ListItemText primary={x} />
                                                </ListItem>
                                            )
                                        }))}
                                    </React.Fragment>
                                )
                            })}
                        </List>
                    </div>
                </Drawer>
                <Toolbar style={{ justifyContent: "space-between" }}>
                    {/*<Tabs value={active} scrollButtons="on" variant="scrollable">*/}
                    <Tabs value={active} scrollButtons="auto" variant="scrollable">
                        {menus.map((menu, i) => {
                            return (
                                <Tab key={i} value={i} label={menu.title} onClick={() => navigate(menu.url)} />
                            )
                        })}
                    </Tabs>
                    <IconButton edge="end" style={classes.menuButton} color="inherit" aria-label="menu" onClick={() => toggleDrawer(false)}>
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}