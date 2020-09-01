import React from 'react';
import {Card, Button, Table} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import Axios from 'axios';
import moment from 'moment';
import Modal from 'react-bootstrap/Modal';

export default class RoomInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            trips: null,
            showInfoModal: false,
            selectedTripId: null // only used in conjunction with modal
        }
    }

    handleShowInfoModal = (id) => {
        this.setState({
            showInfoModal: true,
            selectedTripId: id
        });
    }

    handleCloseInfoModal = () => {
        this.setState({
            showInfoModal: false
        });
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
    
        let selectedTrip = null;
        if(this.state.trips && this.state.showInfoModal){
            selectedTrip = this.state.trips.filter(
                trip => {
                    return trip._id == this.state.selectedTripId;
                }
            )[0];
        }

        //console.log('Selected trip:');
        //console.log(selectedTrip);
        
            // TODO: Card size is a hack, is hard coded right now but should ideally be dynamically sized based on # members (or by size of inner chart)
        return (
            <div>
                {/* Kind of a hack */}
                {this.state.showInfoModal &&
                <Modal show={this.state.showInfoModal} onHide={this.handleCloseInfoModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Trip Info</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p><b>Date Recorded:</b> {moment(selectedTrip.timestamp).format('ll')}</p>
                        <p><b>Buyer:</b> {selectedTrip.buyer}</p>
                        <p><b>Total Cost of Communal Items:</b> ${selectedTrip.communal.total.toFixed(2)}</p>
                        <b>Description of Communal Items:</b>
                        <p style={{marginLeft:'1rem'}}>{selectedTrip.communal.description}</p>
                        <h4>Individual Costs</h4>
                        {Object.keys(selectedTrip.personals).map(
                            (member) => {
                                return (
                                    <div>
                                        <b>{member}</b>
                                        <p style={{marginLeft:'2rem'}}><b>Cost: </b>${selectedTrip.personals[member].total.toFixed(2)}</p>
                                        <b style={{marginLeft:'2rem'}}>Description:</b>
                                        <p style={{marginLeft:'3rem'}}>{selectedTrip.personals[member].description}</p>
                                    </div>
                                );
                            }
                        )}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="danger" onClick={() => {}}>
                            Delete Trip
                        </Button>
                    </Modal.Footer>
                </Modal>
                }
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
                                        <th></th>
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
                                                    <td>
                                                        <Button size="sm" 
                                                            onClick={() => {
                                                                this.handleShowInfoModal(trip._id)
                                                            }}
                                                        >More</Button>
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
            </div>
            
        );
    }
}