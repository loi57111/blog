import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  let [따봉, 따봉변경] = useState([0,0,0]);
  
 
 

  // 모달창 state
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy = copy.sort();
          글제목변경(copy);
        }}
      >
        가나다순정렬
      </button>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자 코트 추천";
          글제목변경(copy);
        }}
      >
        글수정
      </button>

      {/* <div className="list">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍🏻
          </span>
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
          // My answer
          // onClick={() => {
          //   modal == false ? setModal(true) : setModal(false);
          // }}
        >
          {글제목[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div> */}
      
      {
        글제목.map(function (a,i) { //a는 파라미터,i는 카운터
        return (
          <div className="list" key={i}>
            <h4 onClick={() => { setModal(!modal); }}>{글제목[i]}
              <span onClick={() => {
                let copy = [...따봉];
                copy[i] = copy[i] + 1;
                따봉변경(copy)
                
              }}>👍🏻</span>
              {따봉[i]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      {
        // 모달 조건문
        modal == true ? <Modal /> : null
      }
    </div>
  );
}

function Modal() {
  return (
    // 의미없는 div대신 쓸수있다.
    <>
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  );
}

export default App;
