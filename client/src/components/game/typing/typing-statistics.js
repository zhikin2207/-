import React from 'react';

const TypingStatistics = ({elapsedTicks, lettersCount, errorsCount}) => {
    const totalSeconds = Math.round(elapsedTicks / 1000);
    const cpm = Math.round(lettersCount * 60 / totalSeconds);

    return (
        <div>
            Time: {totalSeconds || 0} seconds
            {' | '}
            Spped: {cpm || 0} cpm
            {' | '}
            Errors: {errorsCount}
        </div>
    );
};

export default TypingStatistics;
