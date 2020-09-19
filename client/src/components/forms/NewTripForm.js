import React, {useEffect, useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import { useFormik } from "formik";
import Axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';

import Button from 'react-bootstrap/Button';

export default function NewTransactionForm(props){
    const {show, onHide, members} = props;

    const [submitting, setSubmitting] = useState(false);

    const formik = useFormik({
        initialValues: {
            // payer: members[0],
            // receiver: members[0],
            // amount: 0,
            // method: "Venmo",
            buyer: members[0],
            communal_total: 0,
            communal_description: "",

        },
        onSubmit(values){
            console.log("SUBMITTED FORMIK THING");
            console.log(values);

            setSubmitting(true);

            Axios.post('/api/trips', 
                {
                    room: localStorage.getItem('room'),
                    password: localStorage.getItem('password'),
                    buyer: values.buyer,
                    communal: {
                        total: values.communal_total,
                        description: values.communal_description
                    },
                    personals: {
                        // How do I implement this?
                    }
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
                <Modal.Title>Add New Trip</Modal.Title>
            </Modal.Header>

            <Modal.Body>


                <form onSubmit={formik.handleSubmit} noValidate>
                    <label for="buyer">Buyer:</label>
                    <br></br>
                    <select id="buyer" name="buyer" value={formik.values.buyer} onChange={formik.handleChange}>
                        {members.map(
                            (member) => {
                                return (
                                    <option value={member}>{member}</option>
                                );
                            }
                        )}
                    </select>
                    <br></br>
                    <label for="communal_total">Communal Total:</label>
                    <br></br>
                    <input type="number" id="communal_total" name="communal_total" value={formik.values.communal_total} onChange={formik.handleChange}/>
                    <br></br>
                    <label for="communal_description">Description of Communal Items:</label>
                    <br></br>
                    <textarea rows="6" cols="60" id="communal_description" name="communal_description" value={formik.values.communal_description} onChange={formik.handleChange}/>
                    
                </form>


            </Modal.Body>
            <Modal.Footer>
                {submitting ? <Spinner animation="border"/> :
                <Button variant="primary" type="submit" onClick={formik.handleSubmit}>
                    Add Trip
                </Button>
                }
            </Modal.Footer>
        </Modal>
        
    );

    return (<div></div>);
}