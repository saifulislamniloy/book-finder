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
            sortOrder: ""
        };
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        this.setState({ sortOder: "" })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({ loading: true });
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

    handleSortOrderChange = (value) => {
        let data = this.state.books;
        if (data.length === 0) {
            alert("Search with a keyword first");
            return;
        }

        this.setState({ books: [] })
        if (value === "A-Z") {
            data = data.sort(this.compare)
        } else if (value === "Z-A") {
            data = data.sort(this.reverseCompare)
        } else if (value === "newest") {
            data = data.sort(this.compareTime)
        } else if (value === "oldest") {
            data = data.sort(this.reverseCompareTime)
        }
        console.log("Sort Order: " + value)
        console.log(data)
        this.setState({ books: data, sortOrder:value })
    };

    compare(a, b) {
        if (a.volumeInfo.title < b.volumeInfo.title) {
            return -1;
        }
        if (a.volumeInfo.title > b.volumeInfo.title) {
            return 1;
        }
        return 0;
    }

    reverseCompare(a, b) {
        if (a.volumeInfo.title < b.volumeInfo.title) {
            return 1;
        }
        if (a.volumeInfo.title > b.volumeInfo.title) {
            return -1;
        }
        return 0;
    }

    compareTime(a, b) {
        if (a.volumeInfo.publishedDate < b.volumeInfo.publishedDate) {
            return -1;
        }
        if (a.volumeInfo.publishedDate > b.volumeInfo.publishedDate) {
            return 1;
        }
        return 0;
    }
    reverseCompareTime(a, b) {
        if (a.volumeInfo.publishedDate < b.volumeInfo.publishedDate) {
            return 1;
        }
        if (a.volumeInfo.publishedDate > b.volumeInfo.publishedDate) {
            return -1;
        }
        return 0;
    }

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
                <BookList books={this.state.books} sortOrder={this.state.sortOrder} />
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