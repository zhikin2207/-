import React from 'react';
import {connect} from 'react-redux';
import * as authActions from '../../../actions/auth-actions';

class SignoutPage extends React.Component {
    componentWillMount() {
        this.props.signoutUser();
    }

    render() {
        return (
            <div>Sorry to see you go...</div>
        );
    }
}

export default connect(null, authActions)(SignoutPage);
