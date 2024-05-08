import { extractNumbers } from './src/parser.js';

export function getUserInput(form) {
    const formData = new FormData(form);
    const numberInputs = extractNumbers(formData);
    return numberInputs
}