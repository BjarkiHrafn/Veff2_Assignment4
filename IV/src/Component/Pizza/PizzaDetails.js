import React from 'react';
import { connect } from 'react-redux';
import { PropTypes} from 'prop-types';
import { getAllPizzas} from '../../Actions/pizzaActions';

class PizzaDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {renderIt: false};
    }

    componentDidMount() {
        const {getAllPizzas} = this.props;
        getAllPizzas();
        this.setState({renderIt: true});
    }

    render() {
        const pizza = this.props.pizzas.filter(p => p.id == this.props.match.params.pizzaId);
        console.log(pizza);
            return (
                <div className= "pizza-wrapper">
                    <div className = "pizza-image">
                        <img src = {pizza.image} alt = "" />
                    </div>
                    <div className = "pizza-name">{pizza.name}</div>
                    <div className = "pizza-description">{pizza.description}</div>
                    <div className = "pizza-price">{pizza.price}</div>
                </div>
            );
    }
}

PizzaDetails.propTypes = {
    pizza: PropTypes.shape({
        name: PropTypes.string,
        description: PropTypes.string,
        price: PropTypes.number,
        image: PropTypes.string
    })
};

const mapStateToProps = (storeState) => {
    return {
        pizzas: storeState.pizza
    };
};

export default connect(mapStateToProps, {getAllPizzas})(PizzaDetails);
