import './App.css';
import LoginButton from './component/login';
import LogoutButton from './component/logout';
import { useEffect } from 'react';
import {gapi} from 'gapi-script';

const clientId = "216393743423-7ra1hjhhr7feaj6r1737vmge3pti5704.apps.googleusercontent.com";

function App() {
  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };
    gapi.load('client:auth2',start)
  })
  return (
    <div className="App">
      <LoginButton/>
      <LogoutButton/>
    </div>
  );
}

export default App;
