import {Accordion, Row, Col, Container} from "react-bootstrap";

import {faq} from "../data/index"
const FaqComponent = () => {
  return (
    <div className="faq">
      <Container>
        <Row>
          <Col>
          <h2 className="text-center fw-bold">Lorem ipsum dolor sit.</h2>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-5 pt-5">
          {faq.map((data)=>{
            return(
              <Col key={data.id}>
              <Accordion className="shadow-sm">
                <Accordion.Item eventKey={data.eventkey}>
                  <Accordion.Header>{data.title}</Accordion.Header>
                  <Accordion.Body>
                    {data.desc}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              </Col>
            )
          })}
          
        
        </Row>
      </Container>
      
    </div>
  )
}

export default FaqComponent