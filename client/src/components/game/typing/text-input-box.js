import React from 'react';

class TextInputBox extends React.Component {
    componentDidMount() {
        this._inputPanel.focus();
    }

    forbidEvent(e) {
        e.preventDefault();
    }

    render() {
        return (
            <input 
                className="input-box" 
                type="text" 
                ref={c => this._inputPanel = c}
                onChange={this.props.handleChange} 
                value={this.props.value}
                onPaste={this.forbidEvent}
                onDrop={this.forbidEvent} />
        );
    }
}

TextInputBox.propTypes = {
    handleChange: React.PropTypes.func.isRequired,
    value: React.PropTypes.string.isRequired
};

export default TextInputBox;
