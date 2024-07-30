import '../styles/Header.css'
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';
import Navigation from './Navigation'

function Header() {
    return (
        <>
      <Container fluid className="bg-dark">

        <Row className="justify-content-center text-center mb-0">

          <Col className="pb-0">
            <h1 className="text-white" style={{ fontSize: "70px" }}>
              <Link
                to=""
                className="text-white text-decoration-none"
                style={{ margin: "0" }}
              >
                Karina Gonzalez
              </Link>
            </h1>
          </Col>

        </Row>

      </Container>

      <Navigation />

    </>
    )
}

export default Header;