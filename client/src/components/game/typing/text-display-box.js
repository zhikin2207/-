import React from 'react';

const TextDisplayBox = ({initialText, cursorIndex, fixes, errorIndex}) => {
    const letters = initialText.split('');

    const renderLetter = (letter, index) => {
        let elementClass = getLetterClass(index);
        return <span key={index} className={`letter ${elementClass}`}>{letter}</span>;
    };

    return (
        <div className="typing-panel">
            {letters.map(renderLetter)}
        </div>
    );


    function getLetterClass(letterIndex) {
        let className = '';

        if (letterIndex < cursorIndex) {
            const letterWithError = errorIndex !== -1 && letterIndex >= errorIndex;
            const letterWithFix = fixes.indexOf(letterIndex) !== -1;

            if (letterWithError) {
                className = 'letter-error';
            } else if(letterWithFix) {
                className = 'letter-warning'; 
            } else {
                className = 'letter-success';
            }
        } else if (letterIndex === cursorIndex) {
            className = 'letter-active'; 
        }

        return className;
    }
};

TextDisplayBox.propTypes = {
    initialText: React.PropTypes.string.isRequired,
    cursorIndex: React.PropTypes.number.isRequired,
    fixes: React.PropTypes.array.isRequired,
    errorIndex: React.PropTypes.number.isRequired
};

export default TextDisplayBox;
