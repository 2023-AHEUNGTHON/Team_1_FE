import App from "../App";
import "../components/memo.css";
import React, { useState } from "react";
function Memo() {
    const [inputValue, setInputValue] = useState("");

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };
    return (
        <div>
            <div>
                <div className="title"></div>
                <div className="info_schedule"></div>
            </div>
            <div className="input">
                <div className="input_box">
                    <textarea
                        className="text_"
                        placeholder="메모 입력"
                        name="text"
                        onChange={handleChange}
                        style={{ width: "300px", height: "300px" }}
                    ></textarea>
                </div>
            </div>
            <div className="btn">
                <div className="btn_box">
                    <button className="memo_finshed " /*onClick={}*/>
                        저장
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Memo;
