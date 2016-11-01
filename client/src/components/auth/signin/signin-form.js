import React from 'react';
import {Field, reduxForm} from 'redux-form';

const renderErrorMessage = (errorMessage) => {
    if (errorMessage) {
        return (
            <div className="alert alert-danger">
                {errorMessage}
            </div>
        );
    }
}

const SigninForm = (props) => {
    const {handleSubmit} = props;

    return (
        <div>
            <form className="col-md-4 col-md-offset-4" onSubmit={handleSubmit(props.onSubmit)}>
                <h2>Sign In</h2>

                <div className="form-group">
                    <Field component="input" name="login" type="text" className="form-control" placeholder="Login" />
                </div>

                <div className="form-group">
                    <Field component="input" name="password" type="password" className="form-control" placeholder="Password" />
                </div>

                {renderErrorMessage(props.errorMessage)}

                <button type="submit" className="btn btn-default pull-right">Sign In</button>
            </form>
        </div>
    );
};

export default reduxForm({
    form: 'signin'
})(SigninForm);
