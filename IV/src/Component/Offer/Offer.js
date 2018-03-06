import React from 'react';
import { PropTypes } from 'prop-types';

const Offer = ({ offer }) => {
    const { offerDescription , price, validfor } = offer;
    return (
        <div className = "offer-wrapper">
            <div className = "offer-offer">{offerDescription}</div>
            <div className = "offer-price">{price}</div>
            <div className = "offer-validfor">{valdiFor}</div>
        </div>
    );
};

Offer.propTypes = {
    offer: PropTypes.shape({
        offerDescription: PropTypes.string,
        price: PropTypes.number,
        validFor: PropTypes.string
    })
};

export default Offer;
