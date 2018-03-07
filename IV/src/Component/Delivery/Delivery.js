import React from 'react';
import TextInput from '../TextInput/TextInput';
import { connect } from 'react-redux';

const initialState = {
    fields: {
        name: '',
        address: '',
        city: '',
        telephone: '',
        postalCode: ''
    }
};

class Delivery extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    };
    onInput(e) {
        let fields = Object.assign({}, this.state.fields);
        fields[e.target.name] = e.target.value;
        this.setState({ fields });
    };
    onFormSubmit(e) {
        e.preventDefault();
        const {  name, address, city, telephone, postalCode } = this.state.fields;
        if (name === '' || address === '' || city === '' || telephone === '' || postalCode === '') { return false; }

        // TODO: add information to database

        this.setState(initialState);
    }
    render() {
        const { name, address, city, telephone, postalCode} = this.state.fields;
        return (
            <div>
                <h1>Information</h1>
                <form action="" method="get" onSubmit={(e) => this.onFormSubmit(e)}>
                    <TextInput
                        onChange={e => this.onInput(e)}
                        name="name"
                        value={name}
                        validate={val => !val ? 'name is required' : ''} />
                    <TextInput
                        onChange={e => this.onInput(e)}
                        name="address"
                        value={address}
                        validate={val => !val ? 'address is required' : ''} />
                    <TextInput
                        onChange={e => this.onInput(e)}
                        name="city"
                        value={city}
                        validate={val => !val ? 'city is required' : ''} />
                    <TextInput
                        onChange={e => this.onInput(e)}
                        name="telephone"
                        value={telephone}
                        type="tel"
                        validate={val => !val ? 'telephone number is required' : ''} />
                    <TextInput
                        onChange={e => this.onInput(e)}
                        name="postalCode"
                        value={postalCode}
                        validate={val => !(val<1000 && val>99) ? 'postal code is not fromated correctly' : ''} />
                    <button type="submit" className="btn">submit</button>
                </form>
            </div>
        )
    };
};

export default Delivery;