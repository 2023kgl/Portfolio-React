import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container , Row} from "react-bootstrap"
import MoviesNMunchies from '../../assets/images/MoviesNMunchies.png'
import PlanPal from '../../assets/images/planpal.png'
import OrmEcom from '../../assets/images/OrmEcom.png'
import sqlemployeetracker from '../../assets/images/sqlemployeetracker.png'
import weatherapp from '../../assets/images/weatherapp.png'
import coding from '../../assets/images/coding.gif'

const Portfolio = () => {
    return (

<Container className='mt-5 align-items-center'>
<Row xs={1} md={2}>
    <Card className='mb-5 mx-3' style={{ width: '18rem' }}>
        <Card.Img variant="top" src= {MoviesNMunchies} />
            <Card.Body>
                <Card.Title>Movies&apos;n&apos;Munchies</Card.Title>
                <Card.Text>
                Group Project - Front End
                </Card.Text>
                <Button href='https://github.com/ThisTish/Movies-n-Munchies' className='mx-2 my-2' variant="primary">GitHub Repo</Button>
                <Button href='https://thistish.github.io/Movies-n-Munchies/' className='mx-2 my-2' variant="primary">Deployed Link</Button>
            </Card.Body>
    </Card>

    <Card className='mb-5 mx-3' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={PlanPal} />
            <Card.Body>
                <Card.Title>PlanPal</Card.Title>
                <Card.Text>
                Group Project - Full Stack - Back End and Front End
                </Card.Text>
                <Button href='https://github.com/BradBurr-Github/PlanPal' className='mx-2 my-2' variant="primary">GitHub Repo</Button>
                <Button href='https://planpal-yz2w.onrender.com/' className='mx-2 my-2' variant="primary">Deployed Link</Button>
            </Card.Body>
    </Card>

    <Card className='mb-5 mx-3' style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>NoSQL Social Network API</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                </Card.Text>
                <Button href='https://github.com/2023kgl/NoSQL-socialNetworkAPI' className='mx-2 my-2' variant="primary">GitHub Repo</Button>
                <Button href='' className='mx-2 my-2' variant="primary">Deployed Link</Button>
            </Card.Body>
    </Card>

    <Card className='mb-5 mx-3' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={sqlemployeetracker} />
            <Card.Body>
                <Card.Title>SQL Employee Tracker</Card.Title>
                <Card.Text>
                Back End - 
                </Card.Text>
                <Button href='https://github.com/2023kgl/SQLemployeeTracker' className='mx-2 my-2' variant="primary">GitHub Repo</Button>
                <Button href='https://drive.google.com/file/d/1TNQnn9D6k-9UYAOBFNO4lNerOxZ4VDmj/view?usp=sharing' className='mx-2 my-2' variant="primary">Walkthrough Video</Button>
            </Card.Body>
    </Card>

    <Card className='mb-5 mx-3' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={OrmEcom} />
            <Card.Body>
                <Card.Title>ORM ECOM</Card.Title>
                <Card.Text>
                Back End - 
                </Card.Text>
                <Button href='https://github.com/2023kgl/ORM-ECOM' className='mx-2 my-2' variant="primary">GitHub Repo</Button>
                <Button href='https://drive.google.com/file/d/1-h5aWkPnnqiz4PY3Ul5zOPQbdp8sIt-F/view?usp=sharing' className='mx-2 my-2' variant="primary">Walkthrough Video</Button>
            </Card.Body>
    </Card>

    <Card className='mb-5 mx-3' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={weatherapp} />
            <Card.Body>
                <Card.Title>5 Day Forecast</Card.Title>
                <Card.Text>
                Front End - Working with API&apos;s 
                </Card.Text>
                <Button href='https://github.com/2023kgl/5DayWeatherForecast' className='mx-2 my-2' variant="primary">GitHub Repo</Button>
                <Button href='https://2023kgl.github.io/5DayWeatherForecast/' className='mx-2 my-2' variant="primary">Deployed Link</Button>
            </Card.Body>
    </Card>

    <Card className='mb-5 mx-3' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={coding}/>
            <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                More to come! 😊
                </Card.Text>
                {/* <Button href='' className='mx-2 my-2' variant="primary">GitHub Repo</Button>
                <Button href='' className='mx-2 my-2' variant="primary">Deployed Link</Button> */}
            </Card.Body>
    </Card>

</Row>
</Container>

    )
}

export default Portfolio;