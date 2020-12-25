import React, { Component, Fragment } from 'react';
import Searchbar from '../components/Searchbar';
import TopNavigation from "../components/TopNavigation";
import { getBooksByTerm } from '../api/GBooks';
import BookList from '../components/BookList';


class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: "",
            books: [],
            totalBooks: "",
        };
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        await getBooksByTerm(this.state.searchTerm/*, setMovies, currentPage, setTotalPages*/)
            .then(respone => {
                this.setState({
                    books: respone.items,
                    totalBooks: respone.totalItems,
                })
            });

    };

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value })
    };
    render() {
        return (
            <Fragment>
                <TopNavigation />
                <br /><br /><br />
                <Searchbar handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                <BookList books={this.state.books} />
            </Fragment>
        );
    }
}

export default HomePage;