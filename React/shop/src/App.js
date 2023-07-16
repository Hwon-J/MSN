import './App.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap'
import { useState } from 'react';
import data from './data.js';

function App(){

  let [shoes] = useState(data);

  return (
    <div className="App">
      
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
        <Item shoes={shoes[0]} i={1} />
        <Item shoes={shoes[1]} i={2} />
        <Item shoes={shoes[2]} i={3} />
        </div>
      </div>
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

export default App;
