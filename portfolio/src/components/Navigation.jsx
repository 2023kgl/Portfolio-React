import Nav from 'react-bootstrap/Nav';

function Navigation({ currentPage, handlePageChange }) {
  
  return (

   <Nav bg="light" data-bs-theme="light" className='my-3'>

        <h1 className="text-black mx-5" style={{ fontSize: "40px" }}>
           Karina Gonzalez 
        </h1>

    <ul className="mx-5 nav nav-tabs justify-content-end">

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

    </Nav>

  );
}

export default Navigation;
