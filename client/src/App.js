import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoomInfo from './components/RoomInfo';
import Trips from './components/Trips';
import Payments from './components/Payments';
import RoomLogin from './components/RoomLogin';
import Spinner from 'react-bootstrap/Spinner';
import Axios from 'axios';

import {Container, Row, Col} from 'react-bootstrap';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        roomData: null
    }
  }

  componentDidMount(){
    if(localStorage.getItem('room') != null && localStorage.getItem('password') != null){
      Axios.get('/api/rooms/'+localStorage.getItem('room'), {params: {password: localStorage.getItem('password')}}).then(
        (resp) => {
            console.log(resp.data);
            this.setState(
                {
                    roomData: resp.data
                }
            );
        }
      );
    } 
  }

  // onUpdateTransaction = () => {
  //   console.log("Transaction updated!");
  // }

  render(){
    let room = localStorage.getItem('room');
    let password = localStorage.getItem('password');

    if (room == null || password == null){
      return (
        <RoomLogin/>
      );
    }

    if (this.state.roomData == null) {
      return <Spinner animation="border"/>
    }

    return (
    <div style={{padding: '2rem'}}>
      <p>{JSON.stringify(this.state.roomData)}</p>
      <Container style={{maxWidth: '100%'}}>
        <Row>
          <Col>
            <RoomInfo roomData={this.state.roomData}/>
          </Col>
          <Col>
            <Trips roomData={this.state.roomData}/>
          </Col>
          <Col>
            <Payments roomData={this.state.roomData}/>
          </Col>
        </Row>
      </Container>
      
    </div>
    );
  }
}

export default App;
