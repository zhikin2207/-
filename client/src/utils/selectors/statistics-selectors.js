export const selectLetterCombinations = (letters) => {
    const combinations = [];
    const normalizeSpace = (letter) => letter === ' ' ? '_' : letter;

    for(let i = 1; i < letters.length; i++) {
        const combination = {
            value: normalizeSpace(letters[i - 1].value) + normalizeSpace(letters[i].value),
            errors: letters[i].errors,
            totalSpeed: letters[i].time - letters[i - 1].time,
            timesOccured: 1
        };

        const existingIndex = combinations.findIndex(c => c.value === combination.value);

        if (existingIndex !== -1) {
            combinations[existingIndex].speed += combination.speed;
            combinations[existingIndex].timesOccured ++;
            combinations[existingIndex].errors = [
                ...combinations[existingIndex].errors, 
                ...combination.errors];
        } else {
            combinations.push(combination);
        }
    }

    return combinations.map(c => {
        c.speed = c.totalSpeed / c.timesOccured;
        return c;
    });
};

