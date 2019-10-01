import React from 'react';
import ReactDOM from 'react-dom';

import Badge from './components/Badge';

import 'bootstrap/dist/css/bootstrap.css';

import './statics/scss/global.scss';

import userAvatar from './statics/images/user.jpg'
//import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Badge irstName="Frank"
                        lastName="Contreras"
                        avatarUrl={userAvatar}
                        jobTitle="Software Engineer"
                        twitter="frank"/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
