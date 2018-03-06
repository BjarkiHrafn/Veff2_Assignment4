import React from 'react';
import { connect } from 'react-redux';

class PizzaDetails extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.match.params.pizzaId);
    }

    render() {
        const pizza = this.props.pizzas.filter()
        return (
            <h1>PizzaDetails</h1>
        );
    }
}

const mapStateToProps = (storeState) => {
    return {
        pizzas: storeState.pizza
    };
};

export default connect(mapStateToProps)(PizzaDetails);
