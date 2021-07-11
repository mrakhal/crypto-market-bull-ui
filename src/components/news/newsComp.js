import React from "react";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  CardBody,
  Pagination,
  PaginationLink,
  PaginationItem,
} from "reactstrap";
import { connect } from "react-redux";

class NewsComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topNews: [],
      topPages: 5,
    };
  }

  componentDidMount() {
    // this.getNews();
    this.getTopNews();
  }

  // getNews = () => {
  //   axios
  //     .get(
  //       `http://newsapi.org/v2/everything?q=${this.props.location.out.keyword}&apiKey=aa8f50d4640743efbcdb2c6b9641bf23`
  //     )
  //     .then((res) => {
  //       this.setState({ news: res.data.articles.splice(0, this.state.pages) });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  getTopNews = () => {
    axios
      .get(
        "http://newsapi.org/v2/top-headlines?q=money&apiKey=aa8f50d4640743efbcdb2c6b9641bf23"
      )
      .then((res) => {
        this.setState({
          topNews: res.data.articles.splice(0, this.state.topPages),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    console.log("keyword", this.props.location.state);
    console.log("length", this.props.news.length);
    return (
      <Container fluid className="p-0">
        <Row>
          <Col md="12">
            <marquee
              style={{
                borderBottom: "1px solid #ccc",
                padding: "5px 0px 5px 0px",
              }}
            >
              Dominance :{" "}
              <span style={{ color: "#0000FF" }}>BTC: 44.6% ETH: 18.6%</span>
            </marquee>
            <Container fluid style={{ paddingBottom: "15px" }}>
              <Row>
                <Col md="8">
                  <Col md="12" className="pt-3 pb-3">
                    <h5>All News</h5>
                  </Col>
                  {this.props.news.map((item) => {
                    return (
                      <Card style={{ borderRadius: "15px", marginTop: "10px" }}>
                        <CardBody>
                          <Container>
                            <Row>
                              <Col md="4">
                                <CardImg
                                  top
                                  width="100%"
                                  src={item.urlToImage}
                                  alt="Card image cap"
                                />
                              </Col>
                              <Col md="8">
                                <CardTitle tag="h5">{item.title}</CardTitle>
                                <CardSubtitle
                                  tag="h6"
                                  className="mb-2 text-muted"
                                >
                                  {item.publishedAt.slice(0, 10)}{" "}
                                  {item.publishedAt.slice(11, 16)}
                                </CardSubtitle>
                                <CardText>{item.description}</CardText>
                                <Button color="primary">Read More</Button>
                              </Col>
                            </Row>
                          </Container>
                        </CardBody>
                      </Card>
                    );
                  })}
                  <Container fluid>
                    <Row>
                      <Col
                        md="12"
                        className="d-flex align-items-center justify-content-center pt-5"
                      >
                        {/* Pagination */}
                        <Pagination aria-label="Page navigation example">
                          <PaginationItem>
                            <PaginationLink first href="#" />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink previous href="#" />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">2</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">3</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">4</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink href="#">5</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink next href="#" />
                          </PaginationItem>
                          <PaginationItem>
                            <PaginationLink last href="#" />
                          </PaginationItem>
                        </Pagination>
                      </Col>
                    </Row>
                  </Container>
                </Col>

                {/* TOP NEWS */}
                <Col md="4">
                  <Col md="12" className="pt-3 pb-3">
                    <h5>Top News</h5>
                  </Col>
                  {this.state.topNews.map((item, idx) => {
                    return (
                      <Card style={{ borderRadius: "15px", marginTop: "10px" }}>
                        <CardBody>
                          <Container>
                            <Row>
                              <Col
                                md="1"
                                className="d-flex justify-content-center align-items-center"
                              >
                                {idx + 1}
                              </Col>
                              <Col md="4">
                                <CardImg
                                  top
                                  width="100%"
                                  src={item.urlToImage}
                                  alt="Card image cap"
                                />
                              </Col>
                              <Col md="7">
                                <CardTitle tag="h6">{item.title}</CardTitle>
                                <CardSubtitle
                                  tag="h6"
                                  className="mb-2 text-muted"
                                >
                                  {item.publishedAt.slice(0, 10)}{" "}
                                  {item.publishedAt.slice(11, 16)}
                                </CardSubtitle>
                              </Col>
                            </Row>
                          </Container>
                        </CardBody>
                      </Card>
                    );
                  })}
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapToProps = ({ newsReducers }) => {
  return {
    news: newsReducers.news,
  };
};

export default connect(mapToProps)(NewsComp);
