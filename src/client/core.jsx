import './style.scss';
import React from 'react';
import ReactDOM from "react-dom";
import {Welcome} from './components/Welcome.jsx';
import {Services} from './components/Services.jsx';
import {About} from './components/About.jsx';
import {Navbar} from './components/Navbar.jsx';
import {Impressum} from './components/Impressum.jsx';


function run() {
  ReactDOM.render(
    <div>
      <Navbar/>
      <Welcome welcomeMsg={"Wilkommen"} />
      <Services servicesList={"Leistungen"} />
      <About aboutMsg={"Über uns"} />
      <Impressum impressumMsg={"Impressum"} />
    </div>,
    document.getElementById('app'));
}

document.onload = run();
