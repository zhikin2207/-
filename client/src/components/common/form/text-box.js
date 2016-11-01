import React from 'react';

const TextBox = ({input, label, type, meta: {touched, error}}) => {
    const showError = touched && error;

    return (
        <div className={`form-group ${showError && 'has-error'}`}>
            <input {...input} placeholder={label} type={type} className="form-control" />
            {showError && <p className="text-danger">{error}</p>}
        </div>
    );
};

export default TextBox;
