import React from 'react';
import {Card, Button, Table} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import Axios from 'axios';
import moment from 'moment';

export default class RoomInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            trips: null
        }
    }

    componentDidMount(){
        Axios.get('/api/trips', {params: {room: localStorage.getItem('room'), password: localStorage.getItem('password')}}).then(
            (resp) => {
                console.log(resp.data);
                this.setState(
                    {
                        trips: resp.data.trips
                    }
                );
            }
        )
    }

    render(){
        return (
            <Card style={{ width: '30rem' }}>
                <Card.Body>
                    <Card.Title>Trips</Card.Title>
                    
                    {this.state.trips ?
                    <div>
                        <Table bordered hover>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Buyer</th>
                                    <th>Communal Total</th>
                                    {/* Add personal column for each thing? */}
                                    {/* <th>Username</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                this.state.trips.map(
                                    trip => {
                                        return (
                                            <tr>
                                                <td>
                                                    {moment(trip.timestamp).format('ll')}
                                                </td>
                                                <td>
                                                    {trip.buyer}
                                                </td>
                                                <td>
                                                    ${trip.communal.total.toFixed(2)}
                                                </td>
                                            </tr>
                                        );
                                    }
                                )
                                }
                            </tbody>
                        </Table>
                        {/* <Table>
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
                        </Table> */}
                        <Card.Text>{JSON.stringify(this.state.trips)}</Card.Text>
                        
                    </div>
                    :
                    <Spinner animation="border"/>
                    }
                </Card.Body>
                
            </Card>
            
        );
    }
}