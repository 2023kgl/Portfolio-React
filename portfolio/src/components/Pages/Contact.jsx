import { Container, Form, Button } from "react-bootstrap"
import '../../styles/ContactForm.css'
// import { useState } from 'react';

const ContactForm = () => {


return (

<Container>

        <Form>

            <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control id='name' type="text" placeholder="First and Last Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control id="email" type="email" placeholder="name@example.com" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control id="message" as="textarea" rows={3} />
            </Form.Group>

            <Button as="input" type="submit" value="Submit" />{' '}
    </Form>

</Container>

    )
}

export default ContactForm;