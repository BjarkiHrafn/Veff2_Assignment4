import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Pizza from '../Pizza/Pizza';
import { getAllPizzas} from '../../Actions/pizzaActions';


class Menu extends React.Component {
    constructor(props) {
        super(props);
        
    }
    componentDidMount() {
        const {getAllPizzas} = this.props;
        getAllPizzas();
    }

    render(){
        const{pizza} = this.props;

        return(
            <div className = "container">
                {pizza.map(p => <Pizza key = {p.id} pizza = {p}  onClick = {this.details}/>)}
            </div>
        );
    }
};

const mapStateToProps = ({pizza}) => {
    return{ pizza }
}
export default connect(mapStateToProps, { getAllPizzas })(Menu);
