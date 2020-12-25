import React, { Component } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Book from './Book';

export default class BookList extends Component {
    constructor() {
        super();
        this.state = {
            view: "",
            renderBooks: false
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.books !== this.props.books) {
            this.setBookListView();
        }
    }

    setBookListView() {
        const view = this.props.books.map(result=> {
            return (
                <Col lg={4} md={6} sm={12}>
                    <Book
                        id={result.id}
                        title={result.volumeInfo.title}
                        des={result.volumeInfo.description}
                        img={result.volumeInfo.imageLinks.thumbnail}
                        authors={result.volumeInfo.authors}
                        publishedDate={result.volumeInfo.publishedDate}
                    />
                </Col>
            )
        })
        this.setState({ view: view })
    }

    render() {
        return (
            <div>
                <Row>
                    {this.state.view}
                </Row>
            </div>
        )
    }
}
