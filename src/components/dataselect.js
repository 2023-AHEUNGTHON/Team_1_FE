import React, { useState } from "react";
import "./dataselect.css";

function DayButton({ day, onClick, isSelected }) {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: isSelected ? "#B43420" : "#F2F2F2",
                color: isSelected ? "#FFFFFF" : "#AAAAAA",
                border: "0",
                margin: "1px",
            }}
        >
            {day}
        </button>
    );
}

function DayButtons() {
    const [selectedDays, setSelectedDays] = useState([]);
    {
        /* 요일 설정 */
    }
    const handleButtonClick = (day) => {
        if (selectedDays.includes(day)) {
            // 이미 선택된 요일을 클릭하면 선택 해제
            setSelectedDays(
                selectedDays.filter((selectedDay) => selectedDay !== day)
            );
        } else {
            // 새로운 요일을 선택하면 기존 선택 해제하고 현재 요일만 선택
            setSelectedDays([day]);
        }
    };

    const daysOfWeek = ["월", "화", "수", "목", "금", "토", "일"];

    return (
        <div>
            {/* 전달받은 정보를 표시 */}
            <div className="week">
                {daysOfWeek.map((day, index) => (
                    <div key={index}>
                        <DayButton
                            day={day}
                            onClick={() => handleButtonClick(day)}
                            isSelected={selectedDays.includes(day)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DayButtons;
