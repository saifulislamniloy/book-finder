import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation";


class HomePage extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render() {
        return (
            <Fragment>
                <TopNavigation/>
            </Fragment>
        );
    }
}

export default HomePage;