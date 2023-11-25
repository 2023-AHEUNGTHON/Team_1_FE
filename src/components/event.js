import React, { useEffect, useState } from "react";
import InstafeedModule from "instafeed.js"; // 사용할 예정인 경우만 남겨두기
import "./event.css"; // Import the CSS file

const Event = () => {
    const [htmlContent, setHtmlContent] = useState("");

    useEffect(() => {
        // HTML 파일 가져오기
        fetch("/index.html")
            .then((response) => response.text())
            .then((data) => {
                console.log(data); // 확인용 로그
                setHtmlContent(data);
            })
            .catch((error) => console.error("Error fetching HTML:", error));

        // Instafeed 실행 확인
        console.log("Instafeed is running");

        // Instafeed 설정 및 실행
        var feed = new InstafeedModule({
            target: "gallery",
            template:
                '<li><a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a><h4>{{caption}}</h4></li>',
            accessToken: "YOUR_INSTAGRAM_ACCESS_TOKEN", // 인스타그램 액세스 토큰을 적어주세요
        });
        feed.run();
    }, []);

    // 사용할 예정인 경우만 남겨두기
    const someFunctionThatUsesInstafeedModule = () => {
        // do something with InstafeedModule
    };

    return (
        <div>
            {/* 가져온 HTML을 dangerouslySetInnerHTML을 통해 렌더링 */}
            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
    );
};

export default Event;
