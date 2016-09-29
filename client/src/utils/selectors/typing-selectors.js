export const selectLettersStats = (text) => {
    return text.split('').map(l => {
        return {
            value: l,
            time: 0,
            errors: []
        };
    });
};
