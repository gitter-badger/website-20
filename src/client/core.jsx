import React from 'react';
import ReactDOM from "react-dom";
import {Welcome} from './components/Welcome.jsx';

require('./style.scss');

console.log("react rocks!");

function run() {
  ReactDOM.render(
    <Welcome welcomeMsg={"Wilkommen"}/>,
    document.getElementById('app'));
}

document.onload = run();
