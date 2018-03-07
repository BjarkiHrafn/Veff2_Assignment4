import React from 'react';
import { connect } from 'react-redux';
import { PropTypes} from 'prop-types';
import { getAllPizzas} from '../../Actions/pizzaActions';
import Cookies from 'universal-cookie';
import {addItem} from '../../Actions/cartActions';


class PizzaDetails extends React.Component {
    constructor(props) {
        super(props);
        this.addToCart = this.addToCart.bind(this);
    }

    componentWillMount() {
        const {getAllPizzas} = this.props;
        getAllPizzas();
    }

    addToCart() {
        const pizza = this.props.pizzas.filter(p => p.id == this.props.match.params.pizzaId);
        const {addItem} = this.props;
        addItem(pizza);


        //const cookies = new Cookies();
        //cookies.set(pizza.id, pizza, { path: '/' });

    }

    render() {
        const pizza = this.props.pizzas.filter(p => p.id == this.props.match.params.pizzaId);

            return (
                <div className= "pizza-wrapper">
                    <div className = "pizza-image">
                        <img src = {pizza[0].image} alt = "" />
                    </div>
                    <div className = "pizza-name">{pizza[0].name}</div>
                    <div className = "pizza-description">{pizza[0].description}</div>
                    <div className = "pizza-price">{pizza[0].price}</div>
                    <input type = "submit" value = "buy" onClick = {this.addToCart}/>
                </div>
            );
    }
}

const mapStateToProps = (storeState) => {
    return {
        pizzas: storeState.pizza
        };
};

export default connect(mapStateToProps, {getAllPizzas, addItem})(PizzaDetails);
