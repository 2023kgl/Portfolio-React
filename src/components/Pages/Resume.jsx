import resume from '../../assets/images/ResumeScreenshot.png'
import { Container, Image , Col, Row } from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import PDF from '../../assets/documents/ResumeKG-WebDev.pdf'

const Resume = () => {
    return (

        <Container className='m-4'>
            <Col>
                <Row className='m-2'>
                <Button href={PDF} download className='mx-2 my-2' variant="primary">DOWNLOAD RESUME</Button>
                </Row>

                <Row className='m-2'>
                <Image src={resume} className="resume" />
                </Row>

            </Col>
        </Container>
    )
}

export default Resume;