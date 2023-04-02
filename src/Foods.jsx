import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

const API_FROM_RECDER = "https://api-nodejs-sdni.onrender.com";
export default class Foods extends Component {
  state = {
    data: [],
  };

  getData = async () => {
    try {
      await axios
        .get(`${API_FROM_RECDER}/foods`)
        .then((response) => {
          let res = response.data;

          this.setState({
            data: res,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  componentDidMount() {
    this.getData();
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <div>
          <h2>รายการอาหารทั้งหมด</h2>
        </div>

        <Row>
          {data.map((rs, index) => (
            <Col lg="4" md="6" sm="12" key={index}>
              <div style={{ paddingBottom: "25px" }}>
                <Card>
                  <Card.Img variant="top" src={rs.cover} />
                  <Card.Body>
                    <Card.Title>{rs.name}</Card.Title>
                    {rs.description}
                  </Card.Body>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}