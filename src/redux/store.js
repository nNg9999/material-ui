import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';

import rootReducer from './rootReducer';



export const store = configureStore({
  reducer: rootReducer,

  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ["persist/PERSIST"],
    },
  }),
});

export const persistor = persistStore(store); // чтоб иницыализировать store при первой загрузке

