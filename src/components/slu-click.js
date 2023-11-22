import React from 'react';
import {  BrowserView ,  MobileView ,  isBrowser ,  isMobile  } from 'react-device-detect' ;

import 'bootstrap/dist/css/bootstrap.min.css';
import './solution.css';
import { Link } from 'react-router-dom';

function Slu_click() {
    const searchResult = '';
    
  return (
    <div className="slu_click">
        <h3 className='schedule_slu'>일정 관리 솔루션</h3>
        <div className='gpt_box'>
            <h4>{searchResult}</h4>
        </div>
    </div>
  );
}

export default Slu_click;
