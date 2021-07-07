import React from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import axios from "axios";
import ListRank from "../guest/listRank";
import { Carousel } from "react-responsive-carousel";
import Banner1 from "../../assets/images/banner1.gif";
import Banner2 from "../../assets/images/banner2.gif";
import Banner3 from "../../assets/images/banner3.gif";

var settings = {
  leftMode: true,
  centerPadding: "90px",
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "50px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 540,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "50px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 280,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "30px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 268,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "20px",
        slidesToShow: 1,
      },
    },
  ],
};

class landingComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container
        fluid
        className="p-0"
        style={{ backgroundColor: "rgb(248,249,250)" }}
      >
        <Row>
          <Col md="12">
            <Carousel autoplay showThumbs={false} infiniteLoop={true}>
              <div>
                <img src={Banner1} />
              </div>
              <div>
                <img src={Banner3} />
              </div>
              <div>
                <img src={Banner2} />
              </div>
            </Carousel>
          </Col>
          <Container className="p-5">
            <Row>
              <Col md="5" className="landing">
                <h2>Today's Cryptocurrency Prices by Market Cap Bull</h2>
                <p>
                  The global crypto market cap is <strong>$1.46T</strong>, a{" "}
                  <span>1.48%</span> increase over the last day.{" "}
                  <a href="#">Read more</a>
                </p>
              </Col>

              {/* Carousel Slider */}
              <Col md="7">
                <Slider {...settings}>
                  <div>
                    <Container>
                      <Row>
                        <Col
                          md="12"
                          style={{
                            backgroundColor: "white",
                            borderRadius: "15px",
                          }}
                        >
                          <Container>
                            <Row className="d-flex justify-content-center align-items-center">
                              <Col md="4" className="pt-3 pb-3">
                                <img
                                  src="https://s3.amazonaws.com/s2.coinmarketcap.com/static/alerts/60a4fb4abee9a40019d0c6e4/1621424989453_Price%20Prediction%20Graphic%20128x128.jpg"
                                  width="100%"
                                  style={{ borderRadius: "15px" }}
                                />
                              </Col>
                              <Col md="8">
                                <p>
                                  Monthly Prediction Airdrop
                                  <span>
                                    <br />
                                    <strong>
                                      Predict the Bitcoin Price for July 30th
                                    </strong>
                                  </span>
                                </p>
                              </Col>
                            </Row>
                          </Container>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  <div>
                    <Container>
                      <Row>
                        <Col
                          md="12"
                          style={{
                            backgroundColor: "white",
                            borderRadius: "15px",
                          }}
                        >
                          <Container>
                            <Row className="d-flex justify-content-center align-items-center">
                              <Col md="4" className="pt-3 pb-3">
                                <img
                                  src="https://s3.amazonaws.com/s2.coinmarketcap.com/static/alerts/60b77fe86675c10012e22956/1625489071765_marketmusings2.jpg"
                                  width="100%"
                                  style={{ borderRadius: "15px" }}
                                />
                              </Col>
                              <Col md="8">
                                <p>
                                  News of the Day
                                  <span>
                                    <br />
                                    <strong>
                                      July 5: ETH reaches 2-week high
                                    </strong>
                                  </span>
                                </p>
                              </Col>
                            </Row>
                          </Container>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  <div>
                    <Container>
                      <Row>
                        <Col
                          md="12"
                          style={{
                            backgroundColor: "white",
                            borderRadius: "15px",
                          }}
                        >
                          <Container>
                            <Row className="d-flex justify-content-center align-items-center">
                              <Col md="4" className="pt-3 pb-3">
                                <img
                                  src="https://s3.amazonaws.com/s2.coinmarketcap.com/static/alerts/60deae5804a23f0019d40c67/1625206372104_128x128%20updated%20(2).png"
                                  width="100%"
                                  style={{ borderRadius: "15px" }}
                                />
                              </Col>
                              <Col md="8">
                                <p>
                                  Multiple Portofolios
                                  <span>
                                    <br />
                                    <strong>
                                      Add Multiple Portofolios to Your Profile
                                    </strong>
                                  </span>
                                </p>
                              </Col>
                            </Row>
                          </Container>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                  <div>
                    <Container>
                      <Row>
                        <Col
                          md="12"
                          style={{
                            backgroundColor: "white",
                            borderRadius: "15px",
                          }}
                        >
                          <Container>
                            <Row className="d-flex justify-content-center align-items-center">
                              <Col md="4" className="pt-3 pb-3">
                                <img
                                  src="https://s3.amazonaws.com/s2.coinmarketcap.com/static/alerts/60dbeb30e25a5200121f3755/1625025339139_128x128 (2).png"
                                  width="100%"
                                  style={{ borderRadius: "15px" }}
                                />
                              </Col>
                              <Col md="8">
                                <p>
                                  Legal Tender
                                  <span>
                                    <br />
                                    <strong>
                                      Which Country Will Make Crypto Legal
                                      Tender Next?
                                    </strong>
                                  </span>
                                </p>
                              </Col>
                            </Row>
                          </Container>
                        </Col>
                      </Row>
                    </Container>
                  </div>
                </Slider>
              </Col>
            </Row>
          </Container>
        </Row>
        <ListRank />
      </Container>
    );
  }
}

export default landingComp;
