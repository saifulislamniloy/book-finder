import React, { Component, Fragment } from 'react';
import Searchbar from '../components/Searchbar';
import TopNavigation from "../components/TopNavigation";


class HomePage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        // await getMoviesByTerm(searchTerm, setMovies, currentPage, setTotalPages);
    };

    handleChange = (event) => {
        // setSearchTerm(event.target.value);
    };
    render() {
        return (
            <Fragment>
                <TopNavigation />
                <br /><br /><br />
                <Searchbar handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </Fragment>
        );
    }
}

export default HomePage;