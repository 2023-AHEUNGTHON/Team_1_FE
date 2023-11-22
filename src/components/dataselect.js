import App from "../App";
import React, { useState } from "react";

function Dataselect() {
    const [selectedDays, setSelectedDays] = useState([]);

    const handleCheckboxChange = (day) => {
        setSelectedDays([day]);
    };

    return (
        <div>
            <div>수강 시간</div>
            <div>
                <div>
                    <input
                        type="checkbox"
                        id="monday"
                        value="월요일"
                        onChange={() => handleCheckboxChange("월요일")}
                        checked={selectedDays.includes("월요일")}
                    />
                    <span onClick={() => handleCheckboxChange("월요일")}>
                        월
                    </span>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="tuesday"
                        value="화요일"
                        onChange={() => handleCheckboxChange("화요일")}
                        checked={selectedDays.includes("화요일")}
                    />
                    <span onClick={() => handleCheckboxChange("화요일")}>
                        화
                    </span>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="wednesday"
                        value="수요일"
                        onChange={() => handleCheckboxChange("수요일")}
                        checked={selectedDays.includes("수요일")}
                    />
                    <span onClick={() => handleCheckboxChange("수요일")}>
                        수
                    </span>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="wednesday"
                        value="목요일"
                        onChange={() => handleCheckboxChange("목요일")}
                        checked={selectedDays.includes("목요일")}
                    />
                    <span onClick={() => handleCheckboxChange("수요일")}>
                        목
                    </span>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="wednesday"
                        value="금요일"
                        onChange={() => handleCheckboxChange("금요일")}
                        checked={selectedDays.includes("금요일")}
                    />
                    <span onClick={() => handleCheckboxChange("금요일")}>
                        금
                    </span>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="wednesday"
                        value="토요일"
                        onChange={() => handleCheckboxChange("토요일")}
                        checked={selectedDays.includes("토요일")}
                    />
                    <span onClick={() => handleCheckboxChange("토요일")}>
                        토
                    </span>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="wednesday"
                        value="일요일"
                        onChange={() => handleCheckboxChange("일요일")}
                        checked={selectedDays.includes("일요일")}
                    />
                    <span onClick={() => handleCheckboxChange("일요일")}>
                        일
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Dataselect;
