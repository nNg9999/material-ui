import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

// import App from './components/App';
// import './index.css';

import { PersistGate } from 'redux-persist/integration/react'; // для локал стораж
import App from './components/AppContainer';
import { store, persistor } from './redux/store';


ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router } from "react-router-dom";
// import App from "./components/AppMaterial";

// import CssBaseline from "@material-ui/core/CssBaseline";

// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <React.StrictMode>
//     <Router>
//       <CssBaseline />
//       <App />
//     </Router>
//   </React.StrictMode>,
//   rootElement
// );

// Область видимости функции это...
// a.набор локальных и глобальных переменных к которым функция имеет доступ во время вызова
// c.набор параметров и локальных переменных к которым функция имеет доступ во время вызова


