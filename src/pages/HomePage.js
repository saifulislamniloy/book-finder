import React, { Component, Fragment } from 'react';
import Searchbar from '../components/Searchbar';
import TopNavigation from "../components/TopNavigation";
import { getBooksByTerm } from '../api/GBooks';
import BookList from '../components/BookList';
import Pagination from '../components/Pagination';


class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: "",
            books: [],
            totalBooks: 0,
            currentPage: 1,
            sortOrder: "newest",
        };
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        await getBooksByTerm(this.state.searchTerm, this.state.currentPage, this.state.sortOrder)
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

    handleSortOrderChange = async (value) => {
        this.setState({ sortOrder: value })
        console.log("State Order: "+this.state.sortOrder)
        await getBooksByTerm(this.state.searchTerm, this.state.currentPage, this.state.sortOrder)
            .then(respone => {
                this.setState({
                    books: respone.items,
                    totalBooks: respone.totalItems,
                })
            });
    };

    nextPage = async (page_number) => {
        this.setState({ currentPage: page_number })
        await getBooksByTerm(this.state.searchTerm, this.state.currentPage)
            .then(respone => {
                this.setState({
                    books: respone.items,
                    totalBooks: respone.totalItems,
                })
            });;
    };

    render() {
        return (
            <Fragment>
                <TopNavigation value={"Book Finder"} />
                <Searchbar
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    handleSortOrder={this.handleSortOrderChange}
                />
                <BookList books={this.state.books} />
                {this.state.totalBooks > 10 ? (
                    <Pagination
                        nextPage={this.nextPage}
                        currentPage={this.state.currentPage}
                        totalPages={this.state.totalBooks / 10}
                    />
                ) : (
                        ""
                    )}
            </Fragment>
        );
    }
}

export default HomePage;