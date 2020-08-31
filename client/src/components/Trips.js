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
                //console.log(resp.data);
                this.setState(
                    {
                        trips: resp.data.trips
                    }
                );
            }
        )
    }

    render(){
        // Derive list of members for columns
        let members = [];
        Object.keys(this.props.roomData.members).forEach(
            member => {
                if (!members.includes(member)){
                    members.push(member);
                }
            }
        );
        // if(this.state.trips){
        //     this.state.trips.forEach(
        //         trip => {
        //             Object.keys(trip.personals).forEach(
        //                 member => {
        //                     if (!members.includes(member)){
        //                         members.push(member);
        //                     }
        //                 }
        //             )
        //         }
        //     )
            
        // }
            // TODO: Card size is a hack, is hard coded right now but should ideally be dynamically sized based on # members (or by size of inner chart)
        return (
            <Card style={{}}>
                <Card.Body>
                    <Card.Title>Trips</Card.Title>
                    
                    {this.state.trips ?
                    <div>
                        <Table bordered hover>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Buyer</th>
                                    <th>Communal</th>
                                    {/* Add personal column for each thing? */}
                                    {/* <th>Username</th> */}
                                    {members.map(
                                        member => <th>{member}</th>
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                this.state.trips.map(
                                    trip => {
                                        return (
                                            <tr>
                                                <td>
                                                    {moment(trip.timestamp).format('l')}
                                                </td>
                                                <td>
                                                    {trip.buyer}
                                                </td>
                                                <td>
                                                    ${trip.communal.total.toFixed(2)}
                                                </td>
                                                {members.map(
                                                    member => {
                                                        if(Object.keys(trip.personals).includes(member)){
                                                            return <td>${trip.personals[member].total.toFixed(2)}</td>
                                                            //console.log(trip.personals[member])
                                                            //return <td>1.0</td>
                                                        }
                                                        else{
                                                            return <td>$0.00</td>
                                                        }
                                                    }
                                                )}
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