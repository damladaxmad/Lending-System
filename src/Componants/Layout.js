import {Avatar, Divider, Drawer, Typography, makeStyles, List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core"
import DashboardIcon from '@material-ui/icons/Dashboard';
import GroupIcon from '@material-ui/icons/Group';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import React from "react"
import { useHistory, useLocation } from "react-router";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

    const drawerWidth = 240
    const useStyles = makeStyles((theme) =>{
        return {
          page: {
            background: '#f9f9f9',
            width: '100%',
          },
          root: {
            display: 'flex',
          },
          drawer: {
            width: drawerWidth,
            marginTop: "10px"
          },
          drawerPaper: {
            width: drawerWidth,
            color: "white",
            background: "#041E42"
          },
          active: {
            background: '#c04000'
          },
          title: {
            padding: theme.spacing(2)
          },
          appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            color: "#041E42",
            backgroundColor: "white",
          },
          appBarTitle: {
            flexGrow: 1,
            fontWeight: "bold",
            fontSize: "26px"
          },
          avatar: {
            marginLeft: theme.spacing(2),
            cursor: "pointer"
          },
          toolbar: theme.mixins.toolbar
        } 
      })

const Layout = ({ children }) => {
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        { 
          text: 'My Customers', 
          icon: <GroupIcon style = {{color: "white"}} />, 
          path: '/' 
        },
        { 
          text: 'New Lending', 
          icon: <AddCircleIcon style = {{color: "white"}} />, 
          path: '/lending' 
        },
        ,
        { 
          text: 'Dashboard', 
          icon: <DashboardIcon style = {{color: "white"}} />, 
          path: '/dashboard' 
        },
      ];
  
    return (
      <div className={classes.root}>
        {/* app bar */}
        <AppBar 
        position="fixed" 
        className={classes.appBar}
        elevation={4}
        color="primary"
      >
        <Toolbar>
          <Typography className={classes.appBarTitle}>
            Lending Management System
          </Typography>
          <Typography style = {{fontWeight: "bold"}}>Damlad Ahmed</Typography>
          <Avatar className={classes.avatar} style = {{backgroundColor: "#041E42"}}>D</Avatar>
        </Toolbar>
      </AppBar>
        {/* side drawer */}
        <Drawer
          className={classes.drawer}
          color = "secondary"
          variant="permanent"
          classes={{ paper: classes.drawerPaper }}
          anchor="left"
        >
          <div>
            <Typography variant="h5" className={classes.title}>
                Navigate Pages
            </Typography>
          </div>
  <Divider style = {{backgroundColor: "Gray"}}/>
          {/* links/list section */}
          <List>
          {menuItems.map((item) => (
            <ListItem 
              button
              key={item.text} 
              onClick={() => history.push(item.path)}
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
          
        </Drawer>
  
        {/* main content */}
        <div className={classes.page}>
        <div className={classes.toolbar}></div>
          { children }
        </div>
      </div>
    )
  }

export default Layout;