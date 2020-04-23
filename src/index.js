import "react-dates/initialize";
import React from 'react';
import ReactDOM from 'react-dom';
import "normalize.css";
import 'react-dates/lib/css/_datepicker.css';
import './styles/styles.scss';
import ExpensifyApp from './components/ExpensifyApp';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <ExpensifyApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
