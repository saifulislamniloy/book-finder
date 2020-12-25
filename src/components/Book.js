import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class Book extends Component {
    render() {
        return (
            <Card style={{ width: '18rem', height:'30rem', margin: '1rem', textAlign: 'center' }}>
                <Card.Img variant="top" src={this.props.img} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Link to={{
                        pathname: "/book-detail",
                        state: {
                            title: this.props.title,
                            des: this.props.des,
                            img: this.props.img,
                            authors: this.props.authors,
                            publishedDate: this.props.publishedDate
                        }
                    }}>
                        <Button variant="primary">Details</Button>
                    </Link>
                </Card.Body>
            </Card>
        )
    }
}
