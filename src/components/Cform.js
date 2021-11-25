import React from 'react'
import { Modal,Button,Form } from 'react-bootstrap';
import {  PlusCircleFill} from 'react-bootstrap-icons'
import { useState } from 'react';

function Cform  ({name}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="addForm">
            <div className="icon fs-1">
              <PlusCircleFill onClick={handleShow}/>  
            </div>
            
            <Modal  show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
          <h4 className="font-weight-bold form mt-4">{name}</h4>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label className="fw-bold ">Image</Form.Label>
                    <Form.Control type="text" className="bg-light" size="sm"/>
                    <p className="font-weight-light">Paste the URL of a JPG or PNG of max 20 kb</p>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail" >
                    <Form.Label className="fw-bold ">Name</Form.Label>
                    <Form.Control type="text" className="bg-light" size="sm"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label className="fw-bold ">Description</Form.Label>
                    <Form.Control as="textarea" rows={3} className="bg-light" size="sm"/>
                </Form.Group>
                <Form.Group controlId="formTextarea">
                    <Form.Label className="fw-bold ">Friends</Form.Label>
                     <Form.Select aria-label="Default select example">
                       <option>Select friends</option>
                       <option value="1">One</option>
                       <option value="2">Two</option>
                       <option value="3">Three</option>
                      </Form.Select>
                </Form.Group>
                <Form.Control.Feedback type="invalid" >
                    Please choose a username.
                </Form.Control.Feedback>
                
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            CREATE {name}
          </Button>
        </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Cform
