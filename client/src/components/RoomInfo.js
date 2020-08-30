import React from 'react';
import {Card, Table} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';

export default class RoomInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            roomData: null
        }
    }

    componentDidMount(){
        //headers: {'Content-Type': 'application/json'}, 
        // I guess you have to use query params instead of json data in GETs with Axios
        Axios.get('/api/rooms/'+localStorage.getItem('room'), {params: {password: localStorage.getItem('password')}}).then(
            (resp) => {
                console.log(resp.data);
                this.setState(
                    {
                        roomData: resp.data
                    }
                );
            }
        )
    }

    render(){
        return (
            <Card style={{ width: '24rem' }}>
                <Card.Body>
                    <Card.Title>Room Info</Card.Title>
                    
                    {this.state.roomData ?
                    <div>
                        <Card.Subtitle>{this.state.roomData.name}</Card.Subtitle>
                            <Table style={{marginTop: '1rem'}}>
                                <tbody>
                                    {
                                    Object.keys(this.state.roomData.members).map(
                                        member => {
                                            console.log(member);
                                            console.log(Object.keys(this.state.roomData.members[member]));
                                            return Object.keys(this.state.roomData.members[member]).map( 
                                                    other=>{
                                                        return (
                                                            <tr>
                                                                <td>{member} owes {other} ${this.state.roomData.members[member][other].toFixed(2)}</td>
                                                            </tr>
                                                        );
                                                    }
                                                );
                                            
                                        }
                                    )
                                    }
                                </tbody>
                            </Table>
                        {/* <Card.Text>{JSON.stringify(this.state.roomData)}</Card.Text> */}
                        
                    </div>
                    :
                    <Spinner animation="border"/>
                    }
                    {/* <Button>Asd</Button> */}
                    <Button 
                        onClick={
                        () => {
                            localStorage.removeItem('room');
                            localStorage.removeItem('password');
                            //this.setState({});
                            window.location.reload();
                        }
                        }
                        style={{
                            marginTop: '0rem'
                        }}
                    >
                    Logout
                    </Button>
                </Card.Body>
                
                
            </Card>
            
        );
    }
}