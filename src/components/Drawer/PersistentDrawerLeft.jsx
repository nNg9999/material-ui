import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer as MUIDrawer } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ContactPhone from '@material-ui/icons/ContactPhone';
import LockOpen from '@material-ui/icons/LockOpen';

import CustomizedMenus from '../UserCustomizedMenus/CustomizedMenus';
import { withRouter } from "react-router-dom";


import MyAppBar from "../common/AppBar";

import { connect } from 'react-redux';
import { drawerActions, drawerSelector } from '../../redux/drawer';
import { authSelectors } from '../../redux/auth';
import { themeSelector } from '../../redux/theme';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => {

  return ({
    root: {
      display: 'flex',
    },
    topographyStyles: {
      flex: 1
    },

    appBar: {
      backgroundColor: "rgb(0,0,255)",
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    appBarTheme: {
      backgroundColor: "rgba(0,0,0,0.8)",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
    },
    drawerList: {
      display: 'grid',
      alignItems: 'center',

    },
    drawerListItem: {
      display: 'grid',
      gridTemplateRows: "1fr ",
      gridTemplateColumns: "10% 1fr 20%",
      gridGap: "3vw",
      alignItems: 'start',
      padding: theme.spacing(0, 1),
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
  })
})


function PersistentDrawerLeft(props) {

  const { history, themeConfig, isOpenDrawer, onToggleDrawer, isAuthenticated } = props;

  const classes = useStyles();
  const theme = useTheme();

  const itemsList = [
    {
      text: "Home",
      private: false,
      restricted: false,
      iconRigth: <InboxIcon />,
      onClick: () => history.push("/")
    },
    {
      text: "Contact",
      private: true,
      restricted: false,
      iconRigth: <ContactPhone />,
      iconLeft: < ChevronRightIcon />,
      onClick: () => history.push("/contacts")
    },
    {
      text: "Register",
      private: false,
      restricted: true,
      iconRigth: <LockOpen />,
      iconLeft: < ChevronRightIcon />,
      onClick: () => history.push("/register")
    },
    {
      text: "Login",
      private: false,
      restricted: true,
      iconRigth: <ExitToAppIcon />,
      iconLeft: < ChevronRightIcon />,
      onClick: () => history.push("/login")
    }
  ];

  return (

    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: isOpenDrawer.isOpenDrawer,
          [classes.appBarTheme]: themeConfig.themeConfig === 'ligth' ? false : true,

        })}

      >
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"

            onClick={onToggleDrawer}
            edge="start"
            className={clsx(classes.menuButton, isOpenDrawer.isOpenDrawer && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.topographyStyles}>
            PhoneBook
          </Typography>

          <MyAppBar />

          <CustomizedMenus />
        </Toolbar>
      </AppBar>

      <MUIDrawer
        className={classes.drawer}
        // variant="persistent"
        // variant="permanent"
        variant="temporary"
        anchor="left"
        open={isOpenDrawer.isOpenDrawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        onClose={onToggleDrawer}
      >
        <div className={classes.drawerHeader}>
          <h1>Materuial UA</h1>
          <IconButton
            onClick={onToggleDrawer}
          >
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />

        <List className={classes.drawerList}>
          {itemsList.map((item, index) => {
            const { text, iconRigth, iconLeft, onClick } = item;
            return (

              (isAuthenticated || !item.private) &&
              < ListItem button key={index} onClick={onClick} className={classes.drawerListItem} >
                {iconRigth && <ListItemIcon>{iconRigth}</ListItemIcon>}
                {/* <ListItemText primary={text} /> */}
                <ListItemText>{text}</ListItemText>
                {iconLeft && <ListItemIcon>{iconLeft}</ListItemIcon>}
              </ListItem>
            );
          }
          )}
        </List>
      </MUIDrawer>
      <div className={classes.drawerHeader}></div>
    </div >

  );
}


const mapStateToprops = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
  isOpenDrawer: drawerSelector.getIsOpenDrawer(state),
  themeConfig: themeSelector.getThemeConfig(state),
});

const mapDispatchToprops = {
  onToggleDrawer: drawerActions.onToggleDrawer,
};

export default withRouter(connect(mapStateToprops, mapDispatchToprops)(PersistentDrawerLeft));
