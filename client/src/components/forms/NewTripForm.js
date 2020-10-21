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

            // let personals = {};
            // members.forEach(member => {
            //     personals[member] = {
            //         total: values[member].total,
            //         description: values[member].description
            //     }
            // });

            let personals = {};

            

            Axios.post('/api/trips', 
                {
                    room: localStorage.getItem('room'),
                    password: localStorage.getItem('password'),
                    buyer: values.buyer,
                    communal: {
                        total: values.communal_total,
                        description: values.communal_description
                    },
                    // TODO: Dont hardcode
                    personals: {
                        Anders: {
                            total: values.anders_total == null ? 0 : values.anders_total,
                            description: values.anders_description == null ? '' : values.anders_description
                        },
                        Andrew: {
                            total: values.andrew_total == null ? 0 : values.andrew_total,
                            description: values.andrew_description == null ? '' : values.andrew_description
                        },
                        Jason: {
                            total: values.jason_total == null ? 0 : values.jason_total,
                            description: values.jason_description == null ? '' : values.jason_description
                        },
                        Ryan: {
                            total: values.ryan_total == null ? 0 : values.ryan_total,
                            description: values.ryan_description == null ? '' : values.ryan_description
                        },
                        Milind: {
                            total: values.milind_total == null ? 0 : values.milind_total,
                            description: values.milind_description == null ? '' : values.milind_description
                        },
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
                    
                    {/* {members.map(
                        (member) => {
                            return (
                                <div>
                                    <p>{member}'s Total:</p>

                                    <p>Description of {member}'s Items:</p>
                                </div>
                            );
                        }
                    )} */}

                     
                    <label for="anders_total">Anders's Total:</label>
                    <br></br>
                    <input type="number" id="anders_total" name="anders_total" value={formik.values.anders_total} onChange={formik.handleChange}/>
                    <br></br>
                    <label for="anders_description">Description of Anders's Items:</label>
                    <br></br>
                    <textarea rows="6" cols="60" id="anders_description" name="anders_description" value={formik.values.anders_description} onChange={formik.handleChange}/>

                    <label for="andrew_total">Andrew's Total:</label>
                    <br></br>
                    <input type="number" id="andrew_total" name="andrew_total" value={formik.values.andrew_total} onChange={formik.handleChange}/>
                    <br></br>
                    <label for="andrew_description">Description of Andrew's Items:</label>
                    <br></br>
                    <textarea rows="6" cols="60" id="andrew_description" name="andrew_description" value={formik.values.andrew_description} onChange={formik.handleChange}/>

                    <label for="jason_total">Jason's Total:</label>
                    <br></br>
                    <input type="number" id="jason_total" name="jason_total" value={formik.values.jason_total} onChange={formik.handleChange}/>
                    <br></br>
                    <label for="jason_description">Description of Jason's Items:</label>
                    <br></br>
                    <textarea rows="6" cols="60" id="jason_description" name="jason_description" value={formik.values.jason_description} onChange={formik.handleChange}/>

                    <label for="ryan_total">Ryan's Total:</label>
                    <br></br>
                    <input type="number" id="ryan_total" name="ryan_total" value={formik.values.ryan_total} onChange={formik.handleChange}/>
                    <br></br>
                    <label for="ryan_description">Description of Ryan's Items:</label>
                    <br></br>
                    <textarea rows="6" cols="60" id="ryan_description" name="ryan_description" value={formik.values.ryan_description} onChange={formik.handleChange}/>

                    <label for="milind_total">Milind's Total:</label>
                    <br></br>
                    <input type="number" id="milind_total" name="milind_total" value={formik.values.milind_total} onChange={formik.handleChange}/>
                    <br></br>
                    <label for="milind_description">Description of Milind's Items:</label>
                    <br></br>
                    <textarea rows="6" cols="60" id="milind_description" name="milind_description" value={formik.values.milind_description} onChange={formik.handleChange}/>

                    

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