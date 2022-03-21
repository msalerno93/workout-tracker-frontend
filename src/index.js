import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
// import { Provider } from 'react-redux'
// import Store from './Redux/Store'


ReactDOM.render(
  <React.StrictMode>
      {/* <Provider Store={Store}> */}
        <Router>
          <App />
        </Router>
      {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);