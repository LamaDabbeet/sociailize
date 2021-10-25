import React from 'react';
import './Footer.scss';

export const Footer=(props)=> {

    return (
      <React.Fragment>  
        <div className="footer-top">
          <div className="avatar-wrapper">
            <div className="avatar"></div>
          </div>
          <div className="list list-1">
            <ul>
              <li>Home<span>|</span></li>
              <li>Asthma<span>|</span></li>
              <li>Server Asthma<span>|</span></li>
              <li>COPD</li>
            </ul>
          </div>
          <div className="list list-2">
            <ul>
              <li>map<span>|</span></li>
              <li>location</li>
            </ul>
          </div>
          <div className="list list-3">
            <ul>
              <li><div></div></li>
              <li><div></div></li>
              <li><div></div></li>
              <li><div></div></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
           <p>© 2001-2021 </p>
           <p>All rights reserved. Trade marks are owned by or licensed to the ABC group of companies. ABC plc. Registered in England and Wales. Registered office: United Kingdom.</p>
        </div>
     </React.Fragment>
   )};