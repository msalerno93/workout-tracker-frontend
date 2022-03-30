import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import WorkoutReducer from '../src/Redux/Reducers/WorkoutReducer'
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { createStore, applyMiddleware} from 'redux';


const store = createStore(WorkoutReducer, applyMiddleware(thunk))


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
        <Router>
          <App />
        </Router>
    </React.StrictMode>
  </Provider>,

  document.getElementById('root')
);