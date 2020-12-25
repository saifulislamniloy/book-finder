import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Book extends Component {
    render() {
        return (
            <Card style={{ width: '18rem', margin: '1rem', textAlign: 'center' }}>
                <Card.Img variant="top" src={this.props.img} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.des}
                    </Card.Text>
                    <Link to={{
                        pathname: "/book-detail",
                        state:{
                            title: this.props.title,
                            des: this.props.des,
                            img: this.props.img
                        }
                    }}>
                        <Button variant="primary">Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        )
    }
}
