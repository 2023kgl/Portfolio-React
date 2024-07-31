import Navbar from 'react-bootstrap/Navbar';
import { Col, Row } from 'react-bootstrap';

function Navigation({ currentPage, handlePageChange }) {
  
  return (

    <Navbar  bg="light" data-bs-theme="light">

    <Row className="mb-0">

      <Col className="pb-0 text-left">
        <h1 className="text-black" style={{ fontSize: "40px" }}>
           Karina Gonzalez 
        </h1>
      </Col>


    <Col className="text-right">

    <ul className="nav nav-tabs">

      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact Me
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#projects"
          onClick={() => handlePageChange('Projects')}
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>

    </ul>
    </Col>

    </Row>

    </Navbar>

  );
}

export default Navigation;
