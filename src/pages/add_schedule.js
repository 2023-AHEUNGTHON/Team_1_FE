import App from "../App";
import TimePicker from "../components/timeselect";
import Dataselect from "../components/dataselect";
import Finshedbtn from "../components/finshedbtn";
import React, { useState } from "react";

import "../components/timeselect.css";

function Name() {
    const [toDo, setTodo] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        {
            /*
            이걸 넣으면 값이 저장이 되지만... 엔터치면 사라짐
            if (toDo === "") {
            return;
        }
        setTodo((currentArray) => [toDo, ...currentArray]);
        setTodo(""); */
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
                            onChange={onChange}
                            value={toDo}
                        ></input>
                    </form>
                </div>
            </div>
        </div>
    );
}

function Add_schedule() {
    const [additionalComponents, setAdditionalComponents] = useState([]);

    const addNewComponents = () => {
        setAdditionalComponents([
            ...additionalComponents,
            <div key={additionalComponents.length} className="hellonew">
                <Dataselect />
                <div className="time_place">
                    <TimePicker />~<TimePicker />
                </div>
            </div>,
        ]);
    };

    return (
        <main>
            <Name />
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
                <Finshedbtn />
            </div>
        </main>
    );
}

export default Add_schedule;
