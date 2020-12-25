import React, { Component } from 'react'
import { Fragment } from 'react'
import { Container, Image, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import TopNavigation from '../components/TopNavigation'

export default class BookDetailpage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation />
                <Container style={{ marginTop: '4rem' }}>
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <Row className="justify-content-md-center">
                                <Image src={this.props.location.state.img} height="500px" />
                            </Row>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <Row style={{ fontSize: '30px' }} className="justify-content-md-center">
                                <p>{this.props.location.state.title}</p>
                            </Row>
                            <Row style={{ fontSize: '20px' }} className="justify-content-md-center">
                                <p>{this.props.location.state.des}</p>
                            </Row>
                            <Row style={{ fontSize: '20px' }} className="justify-content-md-center">
                                <Link to={{
                                    pathname: "/",
                                }}>
                                    <Button variant="primary">Home</Button>
                                </Link>
                            </Row>
                        </Col>
                    </Row>

                </Container>
            </Fragment>
        )
    }
}
