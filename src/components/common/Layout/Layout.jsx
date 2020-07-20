import React from "react";
import PropTypes from "prop-types";

import PersistentDrawerLeft from "../../Drawer";
import Grid from '@material-ui/core/Grid';
import ScrollTop from '../../ScrollTop';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


// redux
import { connect } from "react-redux";
import { themeSelector } from '../../../redux/theme';
import { drawerSelector } from '../../../redux/drawer';

// styles
import styles from "./Layout.module.scss";
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const useStyles = makeStyles({
  marginLeft: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: "margin-left .3s ease-out",
  },

});


function Layout(props) {
  const { children, theme, isOpenDrawer } = props;
  const classes = useStyles();
  return (
    <Grid container direction="column" className={`${styles.container} ${
      theme.themeConfig === "dark" ? styles.dark : styles.ligth
      }`}>
      <Grid item id="back-to-top-anchor" xs={12} sm={8} className={`${isOpenDrawer.isOpenDrawer && classes.marginLeft}`}>
        <PersistentDrawerLeft />
        {children}
        <ScrollTop >
          <Fab color="secondary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Grid>
    </Grid>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

const mapStateToProps = state => {
  return {
    theme: themeSelector.getThemeConfig(state),
    isOpenDrawer: drawerSelector.getIsOpenDrawer(state),
  };
};

export default connect(mapStateToProps)(Layout);