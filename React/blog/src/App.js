import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학'])
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button onClick={()=>{
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>정렬</button>
      { 
        글제목.map(function(a, i){
          return (
          <div className="list" key={i}>
            <h4 onClick={()=>{setModal(true); setTitle(i)}}> 
              { 글제목[i] } 
                <span onClick={()=>{ 
                    let copy = [...따봉];
                    copy[i] = copy[i] + 1;
                    따봉변경(copy)  
                }}>👍</span> {따봉[i]} 
              </h4>
            <p>2월 17일 발행</p>
          </div> )
        }) 
      }

      <button onClick={()=>{ setTitle(0) }}> 0번글 </button>
      <button onClick={()=>{ setTitle(1) }}> 1번글 </button>
      <button onClick={()=>{ setTitle(2) }}> 2번글 </button>
      
      {
        modal==true ? 
      <Modal 글제목={글제목} title={title}></Modal> : null
      }
    </div>
  );
}


function Modal(props){
  return (
    <div className="modal" style={{ background : "skyblue" }}>
      <h4>{ props.글제목[props.title] }</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={()=>{
        let copy2 = [...props.글제목];
        copy2[0]="여자 코트 추천";
        props.글제목변경(copy2);
      }}>글수정</button>
    </div>
  )
}

export default App;