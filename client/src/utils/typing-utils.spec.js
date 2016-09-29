import expect from 'expect';
import {validateInput} from './typing-utils';

describe('Typing utils: input validation', () => {
    const initialText = 'abcdefg';

    it('should return NO_ERROR when correct letter typed', () => {
        const prevInput = 'abc';
        const input = 'abcd';
        const errorIndex = -1;

        const result = validateInput(input, prevInput, initialText, errorIndex);

        expect(result.mode).toBe('NO_ERROR');
    });

    it('should return NO_ERROR when letter removed', () => {
        const prevInput = 'abc';
        const input = 'ab';
        const errorIndex = -1;

        const result = validateInput(input, prevInput, initialText, errorIndex);

        expect(result.mode).toBe('NO_ERROR');
    });

    it('should return ERROR_MADE when incorrect letter typed', () => {
        const prevInput = 'abc';
        const input = 'abcX';
        const errorIndex = -1;

        const result = validateInput(input, prevInput, initialText, errorIndex);

        expect(result.mode).toBe('ERROR_MADE');
    });

    it('should set error index as previous input index when incorrect letter typed', () => {
        const prevInput = 'abc';
        const input = 'abcX';
        const errorIndex = -1;

        const result = validateInput(input, prevInput, initialText, errorIndex);

        expect(result.errorIndex).toBe(prevInput.length);
    });

    it('should return ERROR_CONTINUED when letter typed after error', () => {
        const prevInput = 'abX';
        const input = 'abXd';
        const errorIndex = 2;

        const result = validateInput(input, prevInput, initialText, errorIndex);

        expect(result.mode).toBe('ERROR_CONTINUED');
    });

    it('should not change error index when letter typed after error', () => {
        const prevInput = 'abX';
        const input = 'abXd';
        const errorIndex = 2;

        const result = validateInput(input, prevInput, initialText, errorIndex);

        expect(result.errorIndex).toBe(2);
    });


    it('should return ERROR_CONTINUED when letter removed but still has error', () => {
        const prevInput = 'abXd';
        const input = 'abX';
        const errorIndex = 2;

        const result = validateInput(input, prevInput, initialText, errorIndex);

        expect(result.mode).toBe('ERROR_CONTINUED');
    });

    it('should return ERROR_REMOVED when error letter removed', () => {
        const prevInput = 'abX';
        const input = 'ab';
        const errorIndex = 2;

        const result = validateInput(input, prevInput, initialText, errorIndex);

        expect(result.mode).toBe('ERROR_REMOVED');
    });
});
