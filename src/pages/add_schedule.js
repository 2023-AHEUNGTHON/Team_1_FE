import App from "../App";
import TimePicker from "../components/timeselect";
import Dataselect from "../components/dataselect";
import Finshedbtn from "../components/finshedbtn";
import { useState } from "react";

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
            <div>과목명</div>
            <div>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        placeholder="과목명을 입력하세요"
                        onChange={onChange}
                        value={toDo}
                    ></input>
                </form>
            </div>
        </div>
    );
}

function Add_schedule() {
    const [additionalComponents, setAdditionalComponents] = useState([]);

    const addNewComponents = () => {
        setAdditionalComponents([
            ...additionalComponents,
            <div key={additionalComponents.length}>
                <Dataselect />
                <TimePicker />~<TimePicker />
            </div>,
        ]);
    };

    return (
        <>
            <Name />
            <Dataselect />
            <TimePicker />~<TimePicker />
            {additionalComponents}
            <button onClick={addNewComponents}>더 입력</button>
            <Finshedbtn />
        </>
    );
}

export default Add_schedule;
