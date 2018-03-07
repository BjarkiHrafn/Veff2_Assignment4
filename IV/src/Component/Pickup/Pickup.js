import React from 'react';
import TextInput from '../TextInput/TextInput';
import { connect } from 'react-redux';

const initialState = {
    fields: {
        name: '',
        telephone: '',
    }
};

class Pickup extends React.Component {
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
        console.log("submit pleas");
        const {  name, telephone } = this.state.fields;
        if (name === '' || telephone === '') { return false; }

        // TODO: add information to database

        this.setState(initialState);
    }
    render() {
        const { name, telephone } = this.state.fields;
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
                        name="telephone"
                        value={telephone}
                        type="tel"
                        validate={val => !val ? 'telephone number is required' : ''} />
                    <button type="submit" className="btn">submit</button>
                </form>
            </div>
        )
    };
};

export default Pickup;
