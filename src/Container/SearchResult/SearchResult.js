import { FavoriteBorder, Star } from '@material-ui/icons';
import React from 'react';
import './SearchResult.css'

const SearchResult = ({
    img, location, title, description, star, price, total,
}) => {
    return (
        <div className="searchResult">
            <img src={img} alt="" />
            <FavoriteBorder className="searchResult_heart" />

            <div className="searchResult_info">

                <div className="searchResult_infoTop">
                    <p>{location}</p>
                    <p>{title}</p>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult_infoBottom">
                    <div className="searchResult_stars">
                        <Star className="searchResultStar" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className="searchResult_price">
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResult;