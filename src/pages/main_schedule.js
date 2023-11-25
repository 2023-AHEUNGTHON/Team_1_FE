import App from "../App";
import { Link, Route, Switch, useLocation } from "react-router-dom";

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

function MainSchedule() {
    const location = useLocation();
    const scheduleData = location.state ? location.state.scheduleData : null;
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
                    <div className="schdule_list">
                        {/* 전달받은 정보를 표시 */}
                        {scheduleData && (
                            <div>
                                <h3>{scheduleData.title}</h3>
                                <p>{scheduleData.content}</p>
                                {/* 추가적인 정보들도 필요하다면 여기에 추가 */}
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    <button className="main_btn">
                        <Link to="/add_my" className="linked">
                            <div>
                                <New name="개인 일정 등록" />
                            </div>
                        </Link>
                    </button>
                    <div className="myschdule_list"></div>
                </div>
                <div>
                    <button className="main_btn">
                        <Link to="/add_homework" className="linked">
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

export default MainSchedule;
