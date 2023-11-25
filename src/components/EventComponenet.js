import React, { useEffect } from 'react';

const EventComponent = () => {
  useEffect(() => {
    // Instafeed.js를 사용하는 경우, 이 부분에 로직을 포함시킬 수 있습니다.
    const Instafeed = require('instafeed.js'); // NPM 패키지로 사용하는 경우

    var feed = new Instafeed({
      target: 'gallery',
      template: '<li><a href="{{link}}"><img title="{{caption}}" src="{{image}}" /></a><h4>{{caption}}</h4></li>',
      accessToken: 'your_access_token' // 액세스 토큰은 환경변수 등으로 관리하는 것이 좋습니다.
    });
    feed.run();
  }, []);

  return (
    <div>
      <style>
        {`
          #gallery {
            width: 90%;
            margin: 3em auto;
            display: flex;
            flex-wrap: wrap;
          }

          #gallery li {
            width: 25%;
            list-style: none;
          }

          #gallery li img {
            width: 200px;
            height: 200px;
          }
        `}
      </style>
      <ul id="gallery"></ul>
    </div>
  );
};

export default EventComponent;