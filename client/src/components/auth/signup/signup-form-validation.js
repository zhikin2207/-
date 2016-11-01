const validate = (values) => {
    const errors = {};

    if (!values.login) errors.login = 'Please enter an login';
    if (!values.password) errors.password = 'Please enter a password';
    if (!values.confirmPassword) errors.confirmPassword = 'Please enter a password confirmation';
    if (!values.name) errors.name = 'Please enter a name';
    if (!values.email) errors.email = 'Please enter an email';
    if (values.password !== values.confirmPassword) errors.confirmPassword = 'Your passwords must mutch';

    return errors;
}

export default validate;
