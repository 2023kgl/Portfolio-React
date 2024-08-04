import { Container, Form, Button } from "react-bootstrap"


const ContactForm = () => {


return (

<Container>

        <Form>

            <Form.Group  className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="First and Last Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control placeholder="Message" as="textarea" rows={3} />
            </Form.Group>

            <Button as="input" type="submit" value="Submit" />{' '}
    </Form>

</Container>

    )
}

export default ContactForm;