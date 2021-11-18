import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Cform = () => {
    return (
        <div className="bg-light addform text-info rounded-3 p-2 w-50 ">
        <div className="d-flex justify-content-end close"><img src="icon.png"  alt="" className="buups"/></div>
        <h1 className="text-dark fw-5 planet">Planet</h1>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="text-dark">Image</Form.Label>
                <Form.Control type="text"/>
                <Form.Label className="text-dark">Paste the url of a JPG or PNG of max 20kb </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label className="text-dark">Name</Form.Label>
                <Form.Control type="text"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="text-dark">Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Select className="mb-3" id="inlineFormCustomSelect">
                    <option value="0">Choose...</option>
                    <option value="1">Jane Cooper</option>
                    <option value="2">Rober Myrr</option>
                    <option value="3">Stone Brian</option>
                </Form.Select>
            <div className="d-flex justify-content-end ">
            <Button variant="secondary" type="submit" className="pb-2 text-dark text-2 fw-1">CANCEL</Button>
            <Button variant="dark" type="submit" className="mx-2 text2">CREATE CHARACTER</Button>
            </div>                
        </Form>
    </div>
    )
}

export default Cform
