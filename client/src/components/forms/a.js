import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Formik, Field, Form, ErrorMessage } from "formik";

import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel'; 

export default class NewTransactionForm extends React.Component{
    render(){
        return (
            <Modal show={this.props.show} onHide={this.props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Transaction</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Formik
                    render={({handleChange, handleSubmit, handleBlur, values, errors, validateForm}) => (
                        <Form>
                            <p>{errors.payer}</p>
                            <ErrorMessage name="payer"/>
                            <Field
                                name="payer"
                                render={({field, formProps}) => (
                                    <FormGroup controlId="payer">
                                        <FormLabel>Payer</FormLabel>
                                        <FormControl as="select" value={field.value}>
                                            {this.props.members.map((member) => {
                                                return (<option>{member}</option>);
                                            })}
                                        </FormControl>
                                    </FormGroup>
                                )}
                            />
                            <Button onClick={validateForm}>Validate Form</Button>
                        </Form>
                    )}
                    validate={(values) => {
                        let errors = {};
                        console.log(values);
                        console.log(values.payer);
                        if(values.payer == 'Anders'){
                            errors.payer = 'Anders is a dumb-dumb.';
                        }
                        return errors;
                    }}
                    onSubmit={(values) => {
                        console.log(values);
                    }}
                />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" type="submit">
                        Add Transaction
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}