import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from 'axios';

export default class RoomLogin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            room: '',
            password: ''
        }
    }

    handleSubmit = () => {
        console.log(this.state.room);
        console.log(this.state.password);

        Axios.get('/api/rooms/'+this.state.room, {params: {password: this.state.password}}).then(
            (resp) => {
                console.log(resp);
                // this.setState(
                //     {
                //         roomData: resp.data
                //     }
                // );
                localStorage.setItem('room', this.state.room);
                localStorage.setItem('password', this.state.password);
                //this.setState({});
                window.location.reload();
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
        //
    }

    handleChange = (event) => {
        //console.log(event);
        //console.log(event.target);
        let nam = event.target.id;
        //console.log(nam);
        let val = event.target.value;
        this.setState({[nam]: val});
    }

    render(){
        return (
            <div style={{padding: '8rem'}}>
                <h1>Room Login</h1>
                <Form>
                    <Form.Group controlId="room">
                        <Form.Label>Room Name</Form.Label>
                        <Form.Control placeholder='Room Name' onChange={this.handleChange}/>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.handleChange}/>
                    </Form.Group>
                    {/* type="submit" */}
                    <Button variant="primary" onClick={this.handleSubmit}>
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}