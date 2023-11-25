import App from "../App";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import Add_schedule from "./add_schedule";
import "../components/main_schedule.css";

function New(what) {
    return (
        <div className="new_schedule">
            <div>{what.name}</div>
            <div>+</div>
        </div>
    );
}

function MainSchedule2() {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                <div>
                    <button className="main_btn">
                        <Link to="/add" className="linked">
                            <div>
                                <New name="시간표 등록" />
                            </div>
                        </Link>
                    </button>
                    <div className="list_box">
                        <div className="schdule_list">
                            <div>데이터베이스(가)</div>
                            <div>
                                <div>월 12:00~13:15</div>
                                <div>목 12:00~13:15</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <button className="main_btn">
                        <Link to="/personal" className="linked">
                            <div>
                                <New name="개인 일정 등록" />
                            </div>
                        </Link>
                    </button>
                    <div className="myschdule_list"></div>
                </div>
                <div>
                    <button className="main_btn">
                        <Link to="/assignment" className="linked">
                            <div>
                                <New name="과제 일정 등록" />
                            </div>
                        </Link>
                    </button>
                    <div className="homework_list"></div>
                </div>
            </div>
        </div>
    );
}

export default MainSchedule2;
