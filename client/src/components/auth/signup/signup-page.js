import React from 'react';
import {connect} from 'react-redux';
import SignupForm from './signup-form';
import * as authActions from '../../../actions/auth-actions';

class SignupPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentWillMount() {
        this.props.clearAuthError();
    }

    handleFormSubmit(user) {
        this.props.signupUser(user);
    }

    render() {
        return (
            <SignupForm 
                onSubmit={this.handleFormSubmit} 
                errorMessage={this.props.errorMessage} />
        );
    }
}

const mapStateToProps = (state) => ({
    errorMessage: state.auth.payload
});

export default connect(mapStateToProps, authActions)(SignupPage);
