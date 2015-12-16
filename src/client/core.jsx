import React from 'react';
import ReactDOM from "react-dom";
import {Welcome} from './components/Welcome.jsx';


console.log("react rocks!");

function run() {
  ReactDOM.render(
    <Welcome welcomeMsg={"Wilkommen"}/>,
    document.getElementById('app'));
}

document.onload = run();
