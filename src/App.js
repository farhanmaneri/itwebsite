import React from 'react';
import Navigation from './components/Navigation'
import Carousls from './components/Carosuel'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from './components/Navbar';
import { CardColumns } from 'react-bootstrap';


function App() {
  return (
    <>
 <MyNavbar />
<Navigation />
<Carousls />
   <div className='container'>
      <h1>Hello Saud khan!</h1>
      <br />
    <p>lag lag ba kege tadi mko khan</p>
    </div>



</>
  );
}

export default App;
