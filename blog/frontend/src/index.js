import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import './index.css';
import AppNav from './AppNav';

ReactDOM.render( <AppNav/>, document.getElementById('AppNav'));

ReactDOM.render( <App/>, document.getElementById('root'));
