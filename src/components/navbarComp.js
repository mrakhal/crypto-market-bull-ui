import React from "react";
import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { getNews } from "../redux/actions";
import { connect } from "react-redux";

class NavbarComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, index: 0, currentPage: 1, todosPerPage: 5 };
  }

  render() {
    console.log(this.props.news);
    return (
      <div>
        <Container fluid className="p-0 head-nav ">
          <Row className="p-2 info-coin">
            {/* Top Of Navbar */}
            <Col md="9" className="d-none d-xl-block">
              <Container>
                <Row>
                  <Col md="2">
                    Crypto: <span>10,776</span>
                  </Col>
                  <Col md="2">
                    Exchanges: <span>384</span>
                  </Col>
                  <Col md="3">
                    Market Cap: <span>$1,461,889,310,050</span>
                  </Col>
                  <Col md="3">
                    24 Vol: <span>$70,881,113,784</span>
                  </Col>
                  <Col md="2"></Col>
                </Row>
              </Container>
            </Col>

            <Col md="3">
              <Container>
                <Row>
                  <Col md="12">
                    Dominance : <span>BTC: 44.6% ETH: 18.6%</span>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>

        {/* Navbar Section */}
        <Navbar
          light
          expand="md"
          className="p-3"
          style={{ boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 1)" }}
        >
          <NavbarBrand href="/">
            <strong className="navbar-brand">CoinMarketBull</strong>
          </NavbarBrand>
          <NavbarToggler
            onClick={() => {
              this.setState({ isOpen: !this.state.isOpen });
            }}
          />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="m-auto" navbar>
              <NavItem>
                <Link
                  style={{ textDecoration: "none", color: "#637087" }}
                  to={{
                    pathname: "/crypto",
                    // state: this.state.todosPerPage,
                    // out: { keyword: "cryptocurrencies" },
                  }}
                  // params={{ pages: this.state.todosPerPage }}
                >
                  <NavLink>
                    <a>Crypto</a>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <NavLink>Market</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <Link
                    style={{ textDecoration: "none", color: "#637087" }}
                    to={{
                      pathname: "/news",
                      // state: this.state.todosPerPage,
                      // out: { keyword: "cryptocurrencies" },
                    }}
                    // params={{ pages: this.state.todosPerPage }}
                    onClick={() => {
                      this.props.getNews("stock", this.state.todosPerPage);
                    }}
                  >
                    News
                  </Link>
                </DropdownToggle>
                <DropdownMenu right>
                  <Link
                    style={{ textDecoration: "none", color: "#637087" }}
                    to={{
                      pathname: "/news",
                      // out: { pages: this.state.todosPerPage },
                    }}
                    onClick={() => {
                      this.props.getNews("bitcoin", this.state.todosPerPage);
                    }}
                  >
                    <DropdownItem>Bitcoin</DropdownItem>
                  </Link>
                  <DropdownItem divider />
                  <Link
                    style={{ textDecoration: "none", color: "#637087" }}
                    to={{
                      pathname: "/news",
                      // out: { pages: this.state.todosPerPage },
                    }}
                    onClick={() => {
                      this.props.getNews("Ethereum", this.state.todosPerPage);
                    }}
                  >
                    <DropdownItem>Ethereum</DropdownItem>
                  </Link>
                  <DropdownItem divider />
                  <Link
                    style={{ textDecoration: "none", color: "#637087" }}
                    to={{
                      pathname: "/news",
                      // out: { pages: this.state.todosPerPage },
                    }}
                    onClick={() => {
                      this.props.getNews("cardano", this.state.todosPerPage);
                    }}
                  >
                    <DropdownItem>Cardano</DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <div className="mr-auto text-end">
              <NavbarText>
                <a
                  style={{
                    backgroundColor: "#12C584",
                    padding: "5px",
                    borderRadius: "10px",
                    color: "white",
                  }}
                >
                  Login
                </a>
              </NavbarText>
              &nbsp;
              <NavbarText>
                <a
                  style={{
                    backgroundColor: "#12C584",
                    padding: "5px",
                    borderRadius: "10px",
                    color: "white",
                  }}
                >
                  Register
                </a>
              </NavbarText>
            </div>
          </Collapse>
        </Navbar>
        {/*End Navbar Section */}
      </div>
    );
  }
}

const mapToProps = ({ newsReducers }) => {
  return {
    news: newsReducers,
  };
};

export default connect(mapToProps, { getNews })(NavbarComp);
