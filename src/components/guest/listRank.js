import React from "react";
import axios from "axios";
import { Table, Container, Row, Col } from "reactstrap";

class ListRank extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], page: 50 };
  }

  componentDidMount() {
    this.coinCap();
  }

  coinCap = () => {
    axios
      .get("http://localhost:2000/crypto/getAllCrypto")
      .then((res) => {
        this.setState({ data: res.data.splice(0, this.state.page) });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  printCoinRank = () => {
    return this.state.data.map((item, idx) => {
      return (
        <tr>
          <td>{idx + 1}</td>
          <td>
            {item.name}&nbsp;
            <span
              style={{
                backgroundColor: "#12C584",
                color: "white",
                padding: "4px",
                borderRadius: "5px",
                textShadow: "1px 1px 0px #FDD83B",
              }}
            >
              {item.symbol}
            </span>
          </td>
          <td>${item.price.toLocaleString()}</td>
          <td>${item.volume_24h.toLocaleString()}</td>
          <td>{item.total_supply.toLocaleString()}</td>
          <td>
            ${item.circulating_supply.toLocaleString()}&nbsp;
            <span>{item.symbol}</span>
          </td>
        </tr>
      );
    });
  };

  render() {
    console.log(this.state.data);
    return (
      <Container fluid>
        <Row>
          <Col md="12" style={{ overflowX: "auto" }}>
            <Table className="table-items">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Volume 24H</th>
                  <th>Total Supply</th>
                  <th>Circulating Supply</th>
                </tr>
              </thead>
              <tbody>{this.printCoinRank()}</tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ListRank;
