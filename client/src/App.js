import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoomInfo from './components/RoomInfo';
import Trips from './components/Trips';
import Payments from './components/Payments';
import RoomLogin from './components/RoomLogin';



import {Container, Row, Col} from 'react-bootstrap';

class App extends React.Component{
  componentDidMount(){
    
  }
  render(){
    let room = localStorage.getItem('room');
    let password = localStorage.getItem('password');

    if (room == null || password == null){
      return (
        <RoomLogin/>
      );
    }

    return (
    <div style={{padding: '2rem'}}>
      <Container>
        <Row>
          <Col>
            <RoomInfo/>
          </Col>
          <Col>
            <Trips/>
          </Col>
          <Col>
            <Payments/>
          </Col>
        </Row>
      </Container>
      
    </div>
    );
  }
}

export default App;
