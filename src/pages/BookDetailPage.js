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
                    <Row className="justify-content-md-center">
                        <Image src={this.props.location.state.img} height="500px" />
                    </Row>
                    <Row style={{ fontSize: '30px' }} className="justify-content-md-center">
                        <p>{this.props.location.state.title}</p>
                    </Row>
                    <Row style={{ fontSize: '20px' }} className="text-justify">
                        <p>{this.props.location.state.des}</p>
                    </Row>
                    <Row style={{ fontSize: '20px' }} className="justify-content-md-center">
                        {
                           "Authors: "+ this.props.location.state.authors
                        }
                    </Row>
                    <Row style={{ fontSize: '20px' }} className="justify-content-md-center">
                        <p>{"Published Date: "+this.props.location.state.publishedDate}</p>
                    </Row>
                    <Row style={{ fontSize: '20px' }} className="justify-content-md-center">
                        <Link to={{
                            pathname: "/",
                        }}>
                            <Button variant="primary">Back to Home</Button>
                        </Link>
                    </Row>

                </Container>
            </Fragment>
        )
    }
}
