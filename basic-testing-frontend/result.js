import {
    validateStringNotEmpty,
    validateNumber,
  } from './src/util/validation.js';
  import { add } from './src/math.js';
  import { transformToNumber } from './src/util/numbers.js';

export function getResult(numberInputs) {
    let result = '';
  
  try {
    const numbers = [];
    for (const numberInput of numberInputs) {
      validateStringNotEmpty(numberInput);
      const number = transformToNumber(numberInput);
      validateNumber(number);
      numbers.push(number);
    }
    result = add(numbers).toString();
  } catch (error) {
    result = error.message;
  }

  return result
}