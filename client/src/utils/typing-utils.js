export const validateInput = (inputText, prevInputText, initialText, errorIndex) => {
    const validationResult = { };

    const inputIndex = inputText.length - 1;
    const textErrorRemoved = inputText.length <= errorIndex && prevInputText.length > inputText.length;
    const textErrorContinued = errorIndex !== -1 && inputText.length > errorIndex;
    const textErrorMade = errorIndex === -1 && inputText[inputIndex] !== initialText[inputIndex];

    if (textErrorRemoved) {
        validationResult.mode = 'ERROR_REMOVED';
    } else if (textErrorContinued) {
        validationResult.mode = 'ERROR_CONTINUED';
        validationResult.errorIndex = errorIndex;
    } else if (textErrorMade) {
        validationResult.mode = 'ERROR_MADE';
        validationResult.errorIndex = inputIndex;
    } else {
        validationResult.mode = 'NO_ERROR';
    }

    return validationResult;
};
