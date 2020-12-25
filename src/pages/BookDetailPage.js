import React, { Component } from 'react'
import { Fragment } from 'react'
import { Container, Image, Row } from 'react-bootstrap'
import TopNavigation from '../components/TopNavigation'

export default class BookDetailpage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation />
                <Container>
                    <Row style={{textAlign: 'center'}}>
                        <Image src={this.props.location.state.img} height="500px"/>
                    </Row>
                    <Row>
                        <p>{this.props.location.state.title}</p>
                        <p>{this.props.location.state.des}</p>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}
