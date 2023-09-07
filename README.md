# react
리액트 
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // 버튼을 클릭했을 때 실행될 함수
  const handleButtonClick = () => {
    //window.location.href = '새로운 URL';
    window.location.href = 'https://my-doctor.io/?p%20reviousUrl=/healthLab/test&previousButton=GNB%20Logo'
  };
  // "재미로 보는 피부나이 테스트!" 텍스트 스타일을 정의
  const titleStyle = {
    color: 'black', // 폰트 색상을 검정색으로 설정
    fontWeight: 'bold', // 텍스트 굵기 설정 (굵게)
  };

  // 버튼 스타일을 정의
  const buttonStyle = {
    width: '200px', // 너비 설정
    height: '50px', // 높이 설정
    fontSize: '20px', // 폰트 크기 설정
    fontWeight: 'bold', // 텍스트 굵기 설정 (굵게)
    backgroundColor: 'rgb(0, 115, 246)', // 배경색 설정 (하늘색)
    color: 'white', // 텍스트 색상 설정
    borderColor: 'rgb(0, 115, 246)', // 테두리 색상 설정 (파란색)
    borderWidth: '2px', // 테두리 너비 설정
    borderStyle: 'solid', // 테두리 스타일 설정 (실선)
    borderTopLeftRadius: '30px', // 상단 좌측 측면 둥글기 설정
    borderTopRightRadius: '30px', // 상단 우측 측면 둥글기 설정
    borderBottomLeftRadius: '30px', // 아래 좌측 측면 둥글기 설정
    borderBottomRightRadius: '30px', // 아래 우측 측면 둥글기 설정
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <span style={titleStyle}>재미로 보는 <p>피부나이 테스트!</p></span>
        </p>
        <button
          className="App-button"
          style={buttonStyle} // 스타일 적용
          onClick={handleButtonClick}
        >
          바로가기

        </button>
      </header>
    </div>
  );
}

export default App;
