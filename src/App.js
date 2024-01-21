import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);

  // 모달창 state
  let [modal, setModal] = useState(false);

  let [title, setTitle] = useState(0);

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

      {글제목.map(function (a, i) {
        //a는 Array 안 데이터, i는 카운터(인덱스)
        return (
          //반복문 돌때 key값을 지정해줌
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {글제목[i]}
              <span
                onClick={() => {
                  let copy = [...따봉];
                  copy[i] += 1;
                  따봉변경(copy);
                }}
              >
                👍🏻
              </span>
              {따봉[i]}
            </h4>
            <p>2월 17일 발행</p>
          </div>
        );
      })}

      {
        // 모달 조건문
        // props로 부모 -> 자식 state 전송하는 법
        // 1. 자식컴포넌트 사용하는 곳에 가서 <자식컴포넌트 작명={state이름} />
        // 2. 자식컴포넌트 만드는 function으로 가서 props라는 파라미터 등록 후 props.작명 사용
        modal == true ? <Modal 글제목={글제목} title={title} /> : null
      }
    </div>
  );
}

function Modal(props) {
  return (
    // 의미없는 div대신 쓸수있다.
    <>
      <div className="modal">
        {/* props.작명 */}
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
    </>
  );
}

export default App;
