import React, { useState } from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./solution.css";

function Solution() {
    return (
        <div className="solution">
            <Button className="button-slu">
                <Link to="/slu_click" className="slu_btn">
                    솔루션 받으러 가기
                </Link>
            </Button>
        </div>
    );
}

export default Solution;
