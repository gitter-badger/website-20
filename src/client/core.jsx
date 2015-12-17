import React from 'react';
import ReactDOM from "react-dom";
import {Welcome} from './components/Welcome.jsx';
import {Services} from './components/Services.jsx';
import {About} from './components/About.jsx';
import {Impressum} from './components/Impressum.jsx';

require('./style.scss');

console.log("react rocks!");

function run() {
  ReactDOM.render(
    <div>
      <Welcome welcomeMsg={"Wilkommen"}/>
      <Services servicesList={"Leistungen"}/>
      <About aboutMsg={"Über uns"}/>
      <Impressum impressumMsg={"Impressum"}/>
    </div>,
    document.getElementById('app'));
}

document.onload = run();
