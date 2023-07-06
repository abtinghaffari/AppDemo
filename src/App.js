import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Authenticator, ButtonGroup, ThemeProvider, useAuthenticator } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';

import {NavBar1, NavBar2, NavBar3, NavBar4, WelcomeDialogue, Dialogue, ActionCard} from "./ui-components";
import { Auth } from 'aws-amplify';


function App({signOut, SignIn, withAuthenticator,onClick}) {
 
  let white = '#FFFFFF';
  const [bgColor, setBgColor] = useState(white);
   const changeColor =()=>{
      let purple = '#A020F0';
      setBgColor(purple);
    }


  const navbarOverrides = {
    "Logo_of_the_United_States_Forest_Service 2": {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_the_United_States_Forest_Service.svg/1847px-Logo_of_the_United_States_Forest_Service.svg.png"
    },

    "Logo_of_the_United_States_Forest_Service 2": {
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Logo_of_the_United_States_Forest_Service.svg/1847px-Logo_of_the_United_States_Forest_Service.svg.png"
    },

    "image": {
      src: "https://www.naco.org/sites/default/files/GettyImages-867082604.jpg"
    },


    "Button40222556": {
        onClick: signOut
    },

    "Button37502541": {
      
    }
  };

  return (
    <div className="App" style={{background: bgColor}}>

      <NavBar1 overrides={navbarOverrides} width = "100%"/>
        <NavBar2 overrides={navbarOverrides} width = "100%">
          </NavBar2>

      <header className="App-header" style={{background: bgColor}}>
      <div className="WelcomeDialogue-container">
          <WelcomeDialogue />
        </div>
      <div className="ActionCard-container">
        <ActionCard overrides={navbarOverrides} />
        </div>
        
      </header>

      <NavBar3 overrides={navbarOverrides} width = "100%"/>
      <NavBar4 overrides={navbarOverrides} width = "100%"/>


    </div>
  );
}
export default withAuthenticator(App);
