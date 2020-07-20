import { createAction } from '@reduxjs/toolkit';

const onToggleDrawer = createAction('drawer/toggleDrawer', ( ) => ({
  payload: {
    drawer: {
      isOpenDrawer: false,
    }
  }
}));

export default {
  onToggleDrawer,
};
