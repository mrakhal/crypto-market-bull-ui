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
import { Link, Redirect } from "react-router-dom";
import { getNews } from "../redux/actions";
import { connect } from "react-redux";

class NavbarComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }

  componentDidMount() {
    // this.props.getNews();
  }

  render() {
    return (
      <div>
        <Container fluid className="p-0 head-nav ">
          <Row className="p-2">
            {/* Top Of Navbar */}
            <Col md="9">
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
          style={{ borderBottom: "0.1px solid #ccc" }}
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
                <NavLink href="#">Market</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <Link
                    style={{ textDecoration: "none", color: "#637087" }}
                    to={{
                      pathname: "/news",
                      out: { keyword: "cryptocurrencies" },
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
                      out: { keyword: "Bitcoin" },
                    }}
                  >
                    <DropdownItem>Bitcoin</DropdownItem>
                  </Link>
                  <DropdownItem divider />
                  <Link
                    style={{ textDecoration: "none", color: "#637087" }}
                    to={{
                      pathname: "/news",
                      out: { keyword: "Ethereum" },
                    }}
                  >
                    <DropdownItem>Ethereum</DropdownItem>
                  </Link>
                  <DropdownItem divider />
                  <DropdownItem>Cardano</DropdownItem>
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

export default connect(null, { getNews })(NavbarComp);
