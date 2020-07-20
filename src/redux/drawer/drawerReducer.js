import { createReducer, combineReducers } from '@reduxjs/toolkit';

import drawerActions from './drawerActions';


const toggleDrawer = (state) => {
  return {
    ...state,
    isOpenDrawer: !state.isOpenDrawer,
  }
}

const isOpenDrawer = createReducer({ isOpenDrawer: false }, {
  [drawerActions.onToggleDrawer]: toggleDrawer,
})


export default combineReducers({
  isOpenDrawer,
});
