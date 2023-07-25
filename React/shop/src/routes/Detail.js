import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap'
import { useDispatch } from "react-redux"
import { addItem } from "./../store.js"

let Box = styled.div`
  padding : 20px;
  color : grey
`;
let YellowBtn = styled.button`
  background : ${ props => props.bg };
  color : ${ props => props.bg == 'blue' ? 'white' : 'black' };
  padding : 10px;
`;

function Detail(props){

    let dispatch = useDispatch()
    let { id } = useParams();
    let 찾은상품 = props.shoes.find(function(x){
        return x.id == id
    });
    const [showDiscount, setShowDiscount] = useState(true);
    let [count, setCount] = useState(0);
    let [탭, 탭변경] = useState(0);
    let [fade2, setFade2] = useState('')



    useEffect(() => {
        console.log('안녕');
        const timer = setTimeout(() => {
          setShowDiscount(false);
        }, 2000); // 2000 milliseconds = 2 seconds
    
        // Clear the timeout when the component unmounts
        return () => clearTimeout(timer);
      }, []);

      useEffect(()=>{
        setFade2('end')
        return ()=>{
          setFade2('')
        }
      },[])
    
    return (
      <div className={'container start ' + fade2}>
            {showDiscount && <div className='alert alert-warning'>2초 이내 구매시 할인</div>}
            <button onClick={()=>{ setCount(count+1) }}>버튼</button>
            <div className="row">
                <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                <h4 className="pt-5">{찾은상품.title}</h4>
                <p>{찾은상품.content}</p>
                <p>{찾은상품.price}원</p>
                <button className="btn btn-danger" onClick={()=>{
                  dispatch(addItem( {id : 1, name : 'Red Knit', count : 1} ))
                }}>주문하기</button> 
                </div>
            </div>
            <Box>
            <YellowBtn bg="orange">오렌지색 버튼임</YellowBtn>
            <YellowBtn bg="blue">파란색 버튼임</YellowBtn>
            </Box>
            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                <Nav.Link onClick={()=>{ 탭변경(0) }} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link onClick={()=>{ 탭변경(1) }} eventKey="link1">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link onClick={()=>{ 탭변경(2) }} eventKey="link2">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent 탭={탭} />
        </div> 
    )
}

function TabContent({탭}){

  let [fade, setFade] = useState('')

  useEffect(()=>{
    setTimeout(()=>{ setFade('end') }, 100)
  return ()=>{
    setFade('')
  }
  }, [탭])

  return (
    <div className={'start ' + fade}>
      { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭] }
    </div>
  )
}

export default Detail