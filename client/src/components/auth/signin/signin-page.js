import React from 'react';
import {connect} from 'react-redux';
import SigninForm from './signin-form';
import * as authActions from '../../../actions/auth-actions';

class SigninPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentWillMount() {
        this.props.clearAuthError();
    }

    handleFormSubmit(user) {
        this.props.signinUser(user);
    }

    render() {
        return <SigninForm 
            onSubmit={this.handleFormSubmit} 
            errorMessage={this.props.errorMessage} />
    }
}

const mapStateToProps = (state) => ({
    errorMessage: state.auth.payload
});

export default connect(mapStateToProps, authActions)(SigninPage);
