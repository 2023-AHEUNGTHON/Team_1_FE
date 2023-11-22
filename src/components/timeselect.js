import App from "../App";
import React, { useState } from "react";

const TimePicker = () => {
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedMinute, setSelectedMinute] = useState(null);

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
    };

    const handleMinuteChange = (e) => {
        setSelectedMinute(e.target.value);
    };

    return (
        <div>
            <div>
                <select value={selectedTime} onChange={handleTimeChange}>
                    {Array.from({ length: 28 }, (_, hourIndex) => {
                        const hour = hourIndex.toString().padStart(2, "0");
                        return (
                            <option
                                key={`${hour}`}
                                value={`${hour}`}
                            >{`${hour} 시`}</option>
                        );
                    })}
                </select>
            </div>
            <div>
                <select value={selectedMinute} onChange={handleMinuteChange}>
                    {Array.from({ length: 65 }, (_, index) => {
                        const formattedMinute = index
                            .toString()
                            .padStart(2, "0");
                        return (
                            <option
                                key={formattedMinute}
                                value={formattedMinute}
                            >
                                {`${formattedMinute} 분`}
                            </option>
                        );
                    })}
                </select>
            </div>
        </div>
    );
};

export default TimePicker;
