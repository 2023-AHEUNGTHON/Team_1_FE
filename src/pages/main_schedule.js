import App from "../App";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Add_schedule from "./add_schedule";
function New(what) {
    return (
        <div className="new_schedule">
            <div>{what.name}</div>
            <div>+</div>
        </div>
    );
}

function MainSchedule() {
    return (
        <div>
            <div>
                <button>
                    <Link to="/add">
                        <div>
                            <New name="시간표 등록" />
                        </div>
                    </Link>
                </button>
                <div className="list1"></div>
                <button>
                    <Link to="/personal">
                        <div>
                            <New name="개인 일정 등록" />
                            <div className="list1"></div>
                        </div>
                    </Link>
                </button>
                <button>
                    <Link to="/assignment">
                        <div>
                            <New name="과제 일정 등록" />
                            <div className="list1"></div>
                        </div>
                    </Link>
                </button>
            </div>
        </div>
    );
}

export default MainSchedule;
