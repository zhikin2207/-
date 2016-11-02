const validate = (values) => {
    const errors = {};

    if (!values.login) errors.login = 'Please enter an login';
    if (!values.password) errors.password = 'Please enter a password';

    return errors;
};

export default validate;
