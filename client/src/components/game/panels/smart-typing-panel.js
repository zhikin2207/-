import React from 'react';
import TextDisplayBox from '../typing/text-display-box';
import TextInputBox from '../typing/text-input-box';

const SmartTypingPanel = ({
    initialText,
    inputText, 
    fixes,
    errorIndex,
    cursorIndex, 
    onTextInput,
    onInputStarted,
    onInputCompleted
}) => {
    function onChange(event) {
        onTextInput(event);

        const inputText = event.target.value;
        const inputStarted = onInputStarted && inputText.length === 1;
        const inputCompleted = onInputCompleted && inputText.length === initialText.length && errorIndex === -1;

        if (inputStarted) {
            onInputStarted();
        }
        
        if (inputCompleted) {
            onInputCompleted();
        }
    }

    return (
        <div>
            <TextDisplayBox 
                initialText={initialText} 
                fixes={fixes}
                errorIndex={errorIndex}
                cursorIndex={cursorIndex} />
            <TextInputBox 
                handleChange={onChange} 
                value={inputText} />
        </div>
    );
};

SmartTypingPanel.propTypes = {
    initialText: React.PropTypes.string.isRequired,
    inputText: React.PropTypes.string.isRequired,
    fixes: React.PropTypes.array.isRequired,
    errorIndex: React.PropTypes.number.isRequired,
    cursorIndex: React.PropTypes.number.isRequired,
    onTextInput: React.PropTypes.func.isRequired,
    onInputStarted: React.PropTypes.func,
    onInputCompleted: React.PropTypes.func
};

export default SmartTypingPanel;
