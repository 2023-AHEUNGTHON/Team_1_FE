import React from 'react';
import {  BrowserView ,  MobileView ,  isBrowser ,  isMobile  } from 'react-device-detect' ;

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './solution.css';

function solution() {
  return (
    <div className="solution">
      <Button variant="danger" className='button-slu'>솔루션 받으러 가기</Button>{' '}
    </div>
  );
}

export default solution;
