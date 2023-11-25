import React from "react";
import { useLocation } from "react-router-dom";
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile,
} from "react-device-detect";
import "bootstrap/dist/css/bootstrap.min.css";
import "./solution.css";
import { Link } from "react-router-dom";

function Slu_click() {
    return (
        <div className="slu_click">
            <p>
                주어진 일정을 고려하여 12월 3일 수요일까지 컴퓨터네트워크 과제를
                마감하기 위한 시간 관리를 해보겠습니다. 주어진 일정을 고려하면
                다음과 같습니다:
            </p>
            <h1>월요일</h1>
            <p>12:00~13:15: 데이터베이스 수업</p>
            <p>17:00~18:00: 운동</p>

            <h1>화요일</h1>
            <p>13:00~14:15: 컴퓨터네트워크 수업</p>
            <p>15:00~14:15: 컴퓨터비전 수업</p>
            <p>18:00~19:00: 약속</p>
            <p>20:00~21:00: 회의</p>

            <h1>수요일</h1>
            <p>14:15 이후: 유동적으로 조정 가능한 시간 (과제 진행 가능)</p>

            <h1>목요일</h1>
            <p>12:00~13:15: 데이터베이스 수업</p>
            <p>17:00~18:00: 운동</p>

            <h1>금요일</h1>
            <p>(과제 마감일이 목요일이므로 금요일은 고려하지 않음)</p>
        </div>
    );
}

export default Slu_click;
