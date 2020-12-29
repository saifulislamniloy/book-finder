import React, { Component, Fragment } from 'react';
import Searchbar from '../components/Searchbar';
import TopNavigation from "../components/TopNavigation";
import { getBooksByTerm } from '../api/GBooks';
import BookList from '../components/BookList';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader';


class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: "",
            books: [],
            totalBooks: 0,
            currentPage: 1,
            loading: false,
        };
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({loading:true});
        await getBooksByTerm(this.state.searchTerm, this.state.currentPage)
            .then(respone => {
                this.setState({
                    books: respone.items,
                    totalBooks: respone.totalItems,
                    loading: false
                })
            });

    };

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value })
    };

    handleSortOrderChange = async (value) => {
        if (value === "A-Z") {

        } else if (value === "Z-A") {

        } else if (value === "newest") {

        } else if (value === "oldest") {

        }
        console.log("State Order: " + this.state.sortOrder)
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
                {this.state.loading ? <Loader /> : <span></span>}
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