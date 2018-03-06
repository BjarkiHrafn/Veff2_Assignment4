import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Offer from '../Offer/Offer'
import { getAllOffers } from '../../Actions/offerActions';

class Offers extends React.Component {
    componentDidMount() {
        console.log("component did mount");
        //console.log( {getAllOffers} );
        const { getAllOffers } = this.props;
        getAllOffers();
    }
    render() {
        const { offer } = this.props;
        console.log(offer);

        return (
            <div className="container">
                {offer.map(o => <Offer key={o.id} theOffer={o} />)}
            </div>
        );
    }
};

const mapStateToProps = ({ offer }) => {
    return { offer }
}

export default connect(mapStateToProps, { getAllOffers })(Offers);
