import React from 'react';
import { PropTypes } from 'prop-types';

const Offer = ({ theOffer }) => {
    const { offer , price, validFor } = theOffer;
    return (
        <div className = "offer-wrapper">
            <div className = "offer-offer">{offer}</div>
            <div className = "offer-price">{price} ISK</div>
            <div className = "offer-validfor">{validFor}</div>
        </div>
    );
};

Offer.propTypes = {
    offer: PropTypes.shape({
        offer: PropTypes.string,
        price: PropTypes.integer,
        validFor: PropTypes.string
    })
};

export default Offer;
