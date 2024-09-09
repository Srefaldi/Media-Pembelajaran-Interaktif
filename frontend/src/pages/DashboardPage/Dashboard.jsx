import NavBar2 from "../../components/Dashboard/NavBar2"
import {Container, Row, Col} from "react-bootstrap"
const Dashboard = () => {
  return (
    <div>
        <NavBar2/>
        <div className="syarat-ketentuan-page">
    <div className="syarat-ketentuan min-vh-100">
      <Container>

      <Row>
        <Col>
          <h1 className="fw-bold text-center mb-2">Lorem, ipsum.</h1>
          <p className="text-center">Lorem ipsum dolor sit amet consectetur.</p>
        </Col>
      </Row>
        <Row className="text-center pt-5">
          <Col>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, similique?</p>
          </Col>
        </Row>
        <Row className="py-3">
          <Col>
            <h4 className="fw-bold">
              Lorem, ipsum dolor.
            </h4>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Col>
        </Row>
      </Container>

  </div>
    </div>        
    </div>
  )
}

export default Dashboard