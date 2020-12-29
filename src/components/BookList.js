import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap';
import Book from './Book';

export default class BookList extends Component {
    constructor() {
        super();
        this.state = {
            view: "",
            renderBooks: false,
            bookImg: "https://cdn.pixabay.com/photo/2015/11/19/21/10/knowledge-1052010_960_720.jpg"
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.books !== this.props.books) {
            this.setBookListView();
            console.log("New Page Loading .....................")
        }
        if(prevProps.sortOrder !== this.props.sortOrder){
            this.setBookListView();
            console.log("sorting .....................")
        }
    }

    setBookListView() {
        const view = this.props.books.map(result => {
            console.log(result.volumeInfo.imageLinks)
            return (
                <Col lg={4} md={6} sm={12}>
                    <Book
                        id={result.id}
                        title={result.volumeInfo.title}
                        des={result.volumeInfo.description}
                        img={typeof result.volumeInfo.imageLinks !== 'undefined' ?
                            result.volumeInfo.imageLinks.thumbnail
                            :
                            this.state.bookImg}
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
