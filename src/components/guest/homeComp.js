import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import bgHome from "../../../src/assets/images/bg-home.gif";

class HomeComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container fluid className="p-0">
        <Row>
          <Col md="12">
            <Carousel
              showThumbs={false}
              infiniteLoop={true}
              showStatus={false}
              showIndicators={false}
            >
              <div>
                <img src={bgHome} />
              </div>
              <div>
                <img src="assets/2.jpeg" />
              </div>
              <div>
                <img src="assets/3.jpeg" />
              </div>
            </Carousel>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomeComp;
