import React, {useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from "formik";
import Axios from 'axios';

import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import Spinner from 'react-bootstrap/Spinner';

//show, onHide, members

// hook thing attempt
export default function NewTransactionForm(props){
    const {show, onHide, members} = props;

    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        //console.log("New transaction form exists");
        //console.log(members);
    });

    const formik = useFormik({
        initialValues: {
            payer: members[0],
            receiver: members[0],
            amount: 0,
            method: "Venmo",
        },
        onSubmit(values){
            console.log("SUBMITTED FORMIK THING");
            console.log(values);

            setSubmitting(true);

            Axios.post('/api/transactions', 
                {
                    room: localStorage.getItem('room'),
                    password: localStorage.getItem('password'),
                    payer: values.payer,
                    receiver: values.receiver,
                    method: values.method,
                    amount: values.amount
                }
            ).then(
                (resp) => {
                    console.log('Transaction POST response:');
                    console.log(resp.data);
                    
                    setSubmitting(false);
                    onHide();
                }
            )
        }
    })

    if (show) return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Transaction</Modal.Title>
            </Modal.Header>
            <Modal.Body>


                <form onSubmit={formik.handleSubmit} noValidate>
                    <label for="payer">Payer:</label>
                    <br></br>
                    <select id="payer" name="payer" value={formik.values.payer} onChange={formik.handleChange}>
                        {members.map(
                            (member) => {
                                return (
                                    <option value={member}>{member}</option>
                                );
                            }
                        )}
                    </select>
                    <br></br>
                    <label for="amount">Amount:</label>
                    <br></br>
                    <input type="number" id="amount" name="amount" value={formik.values.amount} onChange={formik.handleChange}/>
                    <br></br>
                    <label for="receiver">Receiver:</label>
                    <br></br>
                    <select id="receiver" name="receiver" value={formik.values.receiver} onChange={formik.handleChange}>
                        {members.map(
                            (member) => {
                                return (
                                    <option value={member}>{member}</option>
                                );
                            }
                        )}
                    </select>
                    <br></br>
                    <label for="method">Method:</label>
                    <br></br>
                    <select id="method" name="method" value={formik.values.method} onChange={formik.handleChange}>
                        <option value="Venmo">Venmo</option>
                        <option value="Cash">Cash</option>
                        <option value="Paypal">Paypal</option>
                    </select>
                </form>


            </Modal.Body>
            <Modal.Footer>
                {submitting ? <Spinner animation="border"/> :
                <Button variant="primary" type="submit" onClick={formik.handleSubmit}>
                    Add Transaction
                </Button>
                }
            </Modal.Footer>
        </Modal>
    );

    return (<div></div>);
}