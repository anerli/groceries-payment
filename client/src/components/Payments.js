import React from 'react';
import {Card, Table} from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Modal from 'react-bootstrap/Modal';

export default class Payments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            payments: null,
            showAddPaymentModal: false
        }
    }

    handleCloseAddPaymentModal = () => {
        this.setState({showAddPaymentModal: false});
    }

    handleShowAddPaymentModal = () => {
        this.setState({showAddPaymentModal: true});
    }

    handleAddPayment = () => {
        // TEMP
        this.setState({showAddPaymentModal: false});
    }

    componentDidMount(){
        //console.log(this.props);
        Axios.get('/api/transactions', {params: {room: localStorage.getItem('room'), password: localStorage.getItem('password')}}).then(
            (resp) => {
                console.log('Transactions:');
                console.log(resp.data);
                
                this.setState(
                    {
                        payments: resp.data.transactions
                    }
                );
            }
        )
    }

    render(){
        return (
            <div>
                <Modal show={this.state.showAddPaymentModal} onHide={this.handleCloseAddPaymentModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Transaction</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Put a form here
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.handleAddPayment}>
                            Add Transaction
                        </Button>
                    </Modal.Footer>
                </Modal>
                <Card style={{width: '30rem'}}>
                    <Card.Body>
                        <Card.Title>Payments</Card.Title>
                        
                        {this.state.payments ?
                        <div>
                            <Table bordered hover>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Payer</th>
                                        <th>Receiver</th>
                                        <th>Amount</th>
                                        <th>Method</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                    this.state.payments.map(
                                        transaction => {
                                            return (
                                                <tr>
                                                    <td>
                                                        {moment(transaction.timestamp).format('l')}
                                                    </td>
                                                    <td>
                                                        {transaction.payer}
                                                    </td>
                                                    <td>
                                                        {transaction.receiver}
                                                    </td>
                                                    <td>
                                                        ${transaction.amount.toFixed(2)}
                                                    </td>
                                                    <td>
                                                        {transaction.method}
                                                    </td>
                                                </tr>
                                            );
                                        }
                                    )
                                    }
                                    {/* <tr>
                                        <td>
                                            
                                        </td>
                                        <td>
                                            <DropdownButton id="payer" title="Payer">
                                                <Dropdown.Item>Anders</Dropdown.Item>
                                            </DropdownButton>
                                        </td>
                                        <td>
                                            dropdown
                                        </td>
                                        <td>
                                            $input
                                        </td>
                                        <td>
                                            dropdown
                                        </td>
                                    </tr> */}
                                </tbody>
                            </Table>
                            <Card.Text>{JSON.stringify(this.state.payments)}</Card.Text>
                            
                        </div>
                        :
                        <Spinner animation="border"/>
                        }
                        {/* <Button>Asd</Button> */}
                        <Button 
                            onClick={this.handleShowAddPaymentModal}
                        >
                        Add New
                        </Button>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}