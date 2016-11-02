class TypedLetter {
    constructor(value, timeInTicks) {
        this.value = value || '';
        this.timeInTicks = timeInTicks || 0;
        this.errors = [];
    }
}

export default TypedLetter;
