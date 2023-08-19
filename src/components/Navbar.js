import React from "react";
import { Row, Col, Button } from "reactstrap";

export default class Example extends React.Component {
  render() {
    return (
      <div className="p-4 navbar-shadow">
        <Row>
          <Col xs="4" lg="8">
            <p className="h3"> Blog</p>
          </Col>
          <Col xs="3" lg="2" className="text-end">
            <Button>Login</Button>
          </Col>
          <Col xs="auto" lg="2" className="text-start">
            <Button color="primary">Sign Up</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
