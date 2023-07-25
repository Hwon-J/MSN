import './App.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import { useState } from 'react';
import data from './data.js';
import Detail from './routes/Detail.js'
import Cart from './routes/Cart'
import axios from 'axios'

function App(){

  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
          <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={ <>
          <div className="main-bg"></div>
          <div className="container">
            <div className="row">
            { shoes.map((a,i)=>{
              return <Item shoes={shoes[i]} i={i+1}></Item>
            })}
            </div>
            <button onClick={()=>{
              axios.get('https://codingapple1.github.io/shop/data2.json').then((결과)=>{
                let copy = [...shoes, ...결과.data]
              setShoes(copy)
              })
              .catch(()=>{
                console.log('실패함')
              })
            }}>버튼</button>
          </div>
        </> } />
        <Route path="/detail/:id" element={ <Detail shoes={shoes}/> }/>
        <Route path="/cart" element={ <Cart/> } /> 

        <Route path="/about" element={ <About/> } >  
          <Route path="member" element={ <div>멤버들</div> } />
          <Route path="location" element={ <div>회사위치</div> } />
        </Route>
        <Route path="/event" element={ <Event/> } >  
          <Route path="one" element={ <div>첫 주문시 양배추즙 서비스</div> } />
          <Route path="two" element={ <div>생일기념 쿠폰받기</div> } />
        </Route>
        
        <Route path="*" element={ <div>없는페이지임</div> } />
      </Routes> 

    </div>
  )
}

function Item(props){
  return(
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + props.i + '.jpg'} width="80%" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.price }</p>
    </div>
  )
}

function About(){
  return (
    <div>
      <h4>about페이지임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event(){
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
