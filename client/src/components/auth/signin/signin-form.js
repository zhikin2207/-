import React from 'react';
import {Field, reduxForm} from 'redux-form';
import validate from './signin-form-validation';
import TextBox from '../../common/form/text-box';
import ErrorMessage from '../../common/form/error-message';

const SigninForm = ({handleSubmit, onSubmit, errorMessage}) => {
    return (
        <div>
            <form className="col-md-4 col-md-offset-4" onSubmit={handleSubmit(onSubmit)}>
                <h2>Sign In</h2>

                <div className="form-group">
                    <Field name="login" type="text" className="form-control" placeholder="Login" component={TextBox} />
                </div>

                <div className="form-group">
                    <Field name="password" type="password" className="form-control" placeholder="Password" component={TextBox} />
                </div>

                {errorMessage && <ErrorMessage>errorMessage</ErrorMessage>}

                <button type="submit" className="btn btn-default pull-right">Sign In</button>
            </form>
        </div>
    );
};

export default reduxForm({ form: 'signin', validate })(SigninForm);
