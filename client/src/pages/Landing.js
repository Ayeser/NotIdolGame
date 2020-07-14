import React, { useState } from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import CounterButton from "../components/CounterButton";
import { Col, Row, Container } from "../components/Grid";

function Landing() {


    return (
      <Container fluid>
          <Nav />
<Row>
<Col size="md-1 sm-2" />
<Col size="md-5 sm-4">
<div className="Paragraph" >
          <p>
          Primary page could explain the chart showing addition (unreproducible presentations) vs. multiplication (authentic 1-on-1 discipleship)
          </p>
      </div>
</Col>
<Col size="md-5 sm-4">
<CounterButton Number={1} />
<CounterButton Number={2} />
<CounterButton Number={3} />
</Col>
<Col size="md-1 sm-2" />

</Row>
      </Container>
    )
}

export default Landing;