import React from "react";
import { Fragment } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";

const Searchbar = (props) => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col>
            <Form action="" onSubmit={props.handleSubmit}>
              <Form.Control
                className="search-bar"
                type="text"
                placeholder="Search for Books"
                onChange={props.handleChange} />
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Searchbar;
