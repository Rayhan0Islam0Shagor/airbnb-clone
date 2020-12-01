import { Button } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Search from '../Search/Search';
import './Banner.css';

const Banner = () => {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="banner">
            <div className="banner_search">
                <Button
                    onClick={() => setShowSearch(!showSearch)}
                    className="banner_searchBtn"
                    variant="outlined">
                    {showSearch ? "Hide" : "Search Dates"}
                </Button>
                {showSearch && <Search />}
            </div>
            <div className="banner_info">
                <h1>Get out and stretch your imagination</h1>
                <h5>
                    Plan a different kind of gateway to uncover the hidden gems near you.
                </h5>
                <Button
                    onClick={() => history.push('/search')}
                    variant="outlined">
                    Explore Nearby
                </Button>
            </div>
        </div >
    );
};

export default Banner;