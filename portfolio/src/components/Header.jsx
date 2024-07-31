import '../styles/Header.css'
import { Col, Row, Container } from 'react-bootstrap';
import Navigation from './Navigation'

function Header() {
    return (
        <>

      <Container fluid className="bg-white">

        <Row className="justify-content-center text-center mb-0">

          <Col className="pb-0">
            <h1 className="text-black" style={{ fontSize: "70px" }}>
                Karina Gonzalez 💜
            </h1>
          </Col>

        </Row>

      </Container>

      <Navigation />

    </>
    )
}

export default Header;