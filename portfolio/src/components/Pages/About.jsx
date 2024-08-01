import avatar from "../../assets/images/PortfolioPic.png";
import '../../styles/About.css'
import { Image , Container, Row, Col } from "react-bootstrap"

const AboutMe = () => {
    return(

      <Container>

          <h1 className="m-4">About Me</h1>

        <Row>

          <Col className="d-flex justify-content-center align-items-center mb-4 mb-md-0" >

            <Image src={avatar} rounded fluid className="profilepic" />
          </Col>

          <Col >
             <p>
              Welcome to my portfolio! My name is Karina Gonzalez. I am currently a student at University of Utah Full Stack Coding Bootcamp.
              I have learn a lot in this course from the basics of HMTL and CSS to the more challenging parts of NoSQL and MERN. 
              I look forward to be able to take my skills and continue to learn in the coding tech world. I love the challenges it brings and the feeling after resolving them.
              It&apos;s been almost 6 months of learning and many more to come as I create more projects and enter the field. 
            <br />
            <br />
              
            </p>

          </Col>

          </Row>
          
          </Container>
    )
}

export default AboutMe;