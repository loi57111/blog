import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  // ================= useState ==================================
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);

  // 모달창 state
  let [modal, setModal] = useState(false);

  let [title, setTitle] = useState(0);

  // Saving Input value
  let [입력값, 입력값변경] = useState("");

  return (
    // ============== HTML Section ===========================
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
                onClick={(e) => {
                  // 상위 html로 퍼지는 이벤트 버블링을 막고싶을때
                  e.stopPropagation();
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
            <button
              onClick={() => {
                // 글제목을 copy
                let copy = [...글제목];
                // 어레이레 i번째 값을 1개 삭제
                copy.splice(i, 1);
                // State상태 업데이트
                글제목변경(copy);
              }}
            >
              삭제
            </button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          // 입력값이 두번째일때부터출력됨
          // (정보) state 함수는 늦게 처리됨 => 비동기식
          // 오래걸리는 함수 제쳐두고 밑에있는 console.log 먼저 실행
          입력값변경(e.target.value);
        }}
      ></input>

      {/* 버튼을 누르면 title에 입력한 내용 출력 */}
      <button
        onClick={() => {
          // console.log(입력값);
          // 버튼을 누를때 맨위에 내용 집어넣기 => 글제목 어레이 추가.
          // console.log(입력값);
          let copy = [...글제목];
          copy.unshift(입력값);
          글제목변경(copy);
          // 어레이가 추가되면 따봉 어레이도 추가되어야함
          let copy1 = [...따봉];
          // 어레이 맨 뒤에 0 추가
          copy1.push(0);
          // state 업데이트
          따봉변경(copy1);
        }}
      >
        버튼
      </button>

      {/* ===================Modal========================== */}
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
// =================== Modal 컴포넌트 ===========================
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
