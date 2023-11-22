import React from 'react';
import {  BrowserView ,  MobileView ,  isBrowser ,  isMobile  } from 'react-device-detect' ;

import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './solution.css';
import { Link } from 'react-router-dom';

function solution() {
  return (
    <div className="solution">
      <Button variant="danger" className='button-slu'>
        <Link to="/slu_click" className='solution_btn'>솔루션 받으러 가기</Link>
      </Button>{' '}
    </div>
  );
}

export default solution;
