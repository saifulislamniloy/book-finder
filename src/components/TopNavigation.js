import React, { Component, Fragment } from 'react';
import { Container, Row } from "react-bootstrap";

class TopNavigation extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true}>
                    <Row style={{ background: "blue", fontSize: "30px", padding:"5px", marginBottom:"1rem", color: "white" }}
                        className="justify-content-md-center">
                        <p>{this.props.value}</p>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default TopNavigation;