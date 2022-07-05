import React , { useState } from 'react';
import axios from 'axios';

function App() {

 // const url = `https://api.openweathermap.org/data/2.5/weather?q=Egypt&units=imperial&appid=258aca88f4468ff8aa6a191198d43b06`

  return (
    <div className="app">
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Egypt</p>
          </div>
          <div className='temp'>
            <h1>60°F</h1>
          </div>
          <div className='description'>
            <p>Clouds</p>
          </div>
        </div>


        <div className='bottom'>
          <div className='feels'>
            60°F
          </div>
          <div className='humidity'>
            <p>20%</p>
          </div>
          <div className='wind'>
            12 MPH
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
