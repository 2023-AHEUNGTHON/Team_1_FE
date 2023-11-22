import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './solution.css';

function Solution() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState('');
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      // 서버에 POST 요청 보내기
      const response = await fetch('http://localhost:5000/gpt/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // 요청 헤더에 JSON 형식의 데이터를 전달함을 나타냄
        },
        body: JSON.stringify({ searchQuery }), // 검색어를 JSON 형식으로 변환하여 요청 본문에 추가
      });

      // 서버로부터 받은 응답을 JSON 형식으로 파싱
      const result = await response.json();

      // GPT 결과를 상태에 저장
      setSearchResult(result);

      // 검색 결과를 보여줄 페이지로 이동
      navigate('/slu_click');
    } catch (error) {
       // 오류가 발생하면 콘솔에 오류 메시지 출력
      console.error('Error during search:', error);
    }
  };

  return (
    <div className="solution">
      <Button variant="danger" className='button-slu'>솔루션 받으러 가기</Button>{' '}
    </div>
  );
}

export default Solution;
