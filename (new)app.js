import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./App5";

function App() {
 const [score, setScore] = useState(0);
 const [inputText, setInputText] = useState("");
 const [errorMessage, setErrorMessage] = useState("");
 const [skinAge, setSkinAge] = useState("");
 const [isDarkMode, setIsDarkMode] = useState(false);

 const nextPageUrl1 = "./App1";

 const handleButtonClick = () => {
  if (!/^\d+$/.test(inputText)) {
   setErrorMessage("숫자만 입력!");
   return;
  }

  setSkinAge("");
  window.location.href = nextPageUrl1;
 };

 const handleInputChange = (event) => {
  const cleanedInput = event.target.value.replace(/[^0-9]/g, "");
  // 입력값이 100을 초과하지 않도록 제한
  if (cleanedInput > 1000) {
   setInputText("1000");
  } else {
   setInputText(cleanedInput);
  }
  setErrorMessage("");
 };

 const night = {
  backgroundColor: "black",
  color: "white",
 };

 const morning = {
  backgroundColor: "white",
  color: "black",
 };

 const titleStyle = {
  color: isDarkMode ? "white" : "black",
 };

 const buttonStyle1 = {
  width: "100px",
  height: "35px",
  fontSize: "16px",
  fontWeight: "bold",
  backgroundColor: "rgb(0, 119, 255)",
  color: "white",
  borderColor: "rgb(0, 119, 255)",
  borderWidth: "0px",
  borderStyle: "solid",
  borderTopLeftRadius: "30px",
  borderTopRightRadius: "30px",
  borderBottomLeftRadius: "30px",
  borderBottomRightRadius: "30px",
  marginLeft: "15px",
 };

 const inputStyle = {
  width: "300px",
  height: "30px",
  fontSize: "16px",
  fontWeight: "bold",
 };

 return (
  <div className={`App`}>
   {
    <div className="App">
     <div className="black-nav">
      <div>Test</div>
     </div>
    </div>
   }

   <header className="App-header" style={isDarkMode ? night : morning}>
    <img src={logo} className="App-logo" alt="logo" />
    <p>
     <span style={titleStyle}>재미로 보는 피부나이 테스트!</span>
    </p>
    <div>
     <p>
      <input
       type="text"
       placeholder="나이를 입력하세요."
       value={inputText}
       onChange={handleInputChange}
       style={inputStyle}
       max="1000"
      />
      <p>
       <button
        className="App-button"
        style={buttonStyle1}
        onClick={() => {
         if (inputText === "") {
          alert("나이를 입력해주세요!");
         } else {
          alert("나이 입력이 완료됐습니다.");
          setSkinAge(`피부 나이: ${inputText}`);
         }
         handleButtonClick();
        }}
       >
        확인
       </button>
      </p>
     </p>
    </div>
    <FirstComponent />
    <p style={{ fontSize: "20px" }}>{skinAge}</p>
   </header>
  </div>
 );
}

export default App;

