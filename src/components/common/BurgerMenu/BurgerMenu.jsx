import React from 'react';
import { Button } from '@material-ui/core';
import SearchAppBar from './SearchAppBar';
import ButtonAppBar from './ButtonAppBar';
import PrimarySearchAppBar from './PrimarySearchAppBar';
import Layout from '../../../hoc/Layout';
import MenuIcon from '@material-ui/icons/Menu';


const BurgerMenu = () => {

  return (
    <Layout>
      {/* <Button color="primary">Hello World</Button> */}
      {/* <ButtonAppBar /> */}

      <MenuIcon />
    </Layout>

  );
}
export default BurgerMenu;