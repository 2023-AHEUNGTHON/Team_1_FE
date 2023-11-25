import App from "../App";
import TimePicker from "../components/timeselect";
import Dataselect from "../components/dataselect";
import Finshedbtn from "../components/finshedbtn";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import "../components/timeselect.css";

function Name({ setscontent }) {
    const [toDo, setTodo] = useState("");

    const getvalue = (e) => {
        const { title } = e.target;
        setscontent((prevContent) => ({
            ...prevContent,
            [title]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        {
            if (toDo === "") {
                return;
            }
            setTodo((currentArray) => [toDo, ...currentArray]);
            setTodo("");
        }
    };
    const onChange = (e) => {
        setTodo(e.target.value);
    };
    return (
        <div>
            <div className="name">과목명</div>
            <div className="input_na">
                <div className="input_name">
                    <form onSubmit={onSubmit}>
                        <input
                            className="name_input"
                            type="text"
                            placeholder="과목명을 입력하세요"
                            onChange={getvalue}
                            name="title"
                        ></input>
                    </form>
                </div>
            </div>
        </div>
    );
}

function Add_schedule() {
    const [additionalComponents, setAdditionalComponents] = useState([]);

    const [scontent, setscontent] = useState({
        title: "",
        content: "",
        // Add any additional fields you need here
        // For example:
        day: "",
        startTime: "",
        endTime: "",
    });
    const navigate = useNavigate();

    const addNewComponents = () => {
        setAdditionalComponents([
            ...additionalComponents,
            <div key={additionalComponents.length} className="hellonew">
                <Dataselect />
                <div className="time_place">
                    <TimePicker onChange={(value) => handleTimeChange(value)} />
                    ~
                    <TimePicker onChange={(value) => handleTimeChange(value)} />
                </div>
            </div>,
        ]);
    };
    const handleTimeChange = (value) => {
        // Assuming the value contains the selected time
        // Update the state accordingly
        setscontent((prevContent) => ({
            ...prevContent,
            startTime: value.startTime,
            endTime: value.endTime,
        }));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        // 입력된 정보를 state로 저장
        const scheduleData = { ...scontent };

        // MainSchedule 컴포넌트로 정보 전달
        navigate("/copy", { state: { scheduleData } });
    };

    return (
        <main>
            <Name setscontent={setscontent} />
            <div className="name">수강 시간</div>
            <div className="info_box">
                <div className="info">
                    <div className="info_box_in">
                        <div className="day">
                            <Dataselect />
                        </div>
                        <div className="time_place">
                            <div className="time">
                                <TimePicker />~<TimePicker />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="time_place_new_box">
                    <div className="time_place_new">{additionalComponents}</div>
                </div>
            </div>
            <div className="finshed">
                <div className="btn_finshed">
                    <button onClick={addNewComponents} className="more_btn ">
                        더 입력
                    </button>
                </div>
            </div>
            <div className="btn_finshe">
                <button onClick={onSubmit} className="more_btn">
                    완료
                </button>
            </div>
        </main>
    );
}

export default Add_schedule;
