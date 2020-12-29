import React from "react";
import { Fragment } from "react";
import { Container, Form, Row, Col, Dropdown } from "react-bootstrap";

const Searchbar = (props) => {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col sm={8} md={11} lg={11}>
            <Form action="" onSubmit={props.handleSubmit}>
              <Form.Control
                className="search-bar"
                type="text"
                placeholder="Search for Books"
                onChange={props.handleChange} />
            </Form>
          </Col>
          <Col sm={4} md={1} lg={1}>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sort
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={()=>props.handleSortOrder("A-Z")} >A-Z</Dropdown.Item>
                <Dropdown.Item onClick={()=>props.handleSortOrder("Z-A")} >Z-A</Dropdown.Item>
                <Dropdown.Item onClick={()=>props.handleSortOrder("newest")}>Newest</Dropdown.Item>
                <Dropdown.Item onClick={()=>props.handleSortOrder("oldest")}>Oldest</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Searchbar;
