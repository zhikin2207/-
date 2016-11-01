import React from 'react';
import {Field, reduxForm} from 'redux-form';
import validate from './signup-form-validation';
import TextBox from '../../common/form/text-box';

const renderErrorMessage = (errorMessage) => {
    if (errorMessage) {
        return (
            <div className="alert alert-danger">
                {errorMessage}
            </div>
        );
    }
}

const SignupForm = (props) => {
    const {handleSubmit} = props;

    return (
        <form className="col-md-4 col-md-offset-4" onSubmit={handleSubmit(props.onSubmit)}>
            <h2>Sign Up</h2>

            <div className="form-group">
                <Field name="login" type="text" component={TextBox} label="Login" />
            </div>

            <div className="form-group">
                <Field name="password" type="password" component={TextBox} label="Password" />
            </div>

            <div className="form-group">
                <Field name="confirmPassword" type="password" component={TextBox} label="Confirm password" />
            </div>

            <div className="form-group">
                <Field name="name" type="text" component={TextBox} label="Name" />
            </div>

            <div className="form-group">
                <Field name="email" type="email" component={TextBox} label="Email" />
            </div>

            {renderErrorMessage(props.errorMessage)}

            <button type="submit" className="btn btn-default pull-right">Sign Up</button>
        </form>
    );
};

export default reduxForm({
    form: 'signup',
    validate
})(SignupForm);
