import App from "../App";
import TimePicker from "../components/timeselect";
import Dataselect from "../components/dataselect";
import Finshedbtn from "../components/finshedbtn";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import "../components/timeselect.css";
import "../components/add_homework.css";

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

            setTodo("");
        }
    };
    const onChange = (e) => {
        setTodo(e.target.value);
    };
    return (
        <div>
            <div className="name">솔루션 받고 싶은 과제명을 입력해주세요!</div>
            <div className="input_na">
                <div className="input_name">
                    <input
                        className="name_input"
                        type="text"
                        placeholder="과제명을 입력해주세요"
                        name="title"
                    ></input>
                </div>
            </div>
        </div>
    );
}

function Add_homework() {
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
        navigate("/main", { state: { scheduleData } });
    };

    return (
        <main>
            <Name setscontent={setscontent} />
            <div className="name">과제 마감 일정</div>
            <div className="info_box">
                <div className="info">
                    <div className="info_box_in">
                        <div className="day">
                            <div className="year">
                                <input className="date_input"></input>년
                            </div>
                            <div className="month">
                                <input className="date_input"></input>월
                            </div>
                            <div className="day">
                                <input className="date_input"></input>일
                            </div>
                        </div>
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
                </div>
                <div className="time_place_new_box">
                    <div className="time_place_new">{additionalComponents}</div>
                </div>
            </div>
            <div className="finshed"></div>
            <div className="btn_finshe">
                <button onClick={onSubmit} className="more_btn">
                    등록완료
                </button>
            </div>
        </main>
    );
}

export default Add_homework;
