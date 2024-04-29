import {it, expect, describe } from 'vitest'
import { validateStringNotEmpty, validateNumber } from './validation'

describe('validateStringNotEmpty()', () => {
    it('should return undefined if we provide some string', () => {
        const initialValue = 'string'
        const result = validateStringNotEmpty(initialValue)
    
        expect(result).toBeUndefined()
    })
    
    it('should return the same string', () => {
        const initialValue = ' '
        const result = () => validateStringNotEmpty(initialValue)
    
        expect(result).toThrow()
    })
    
    it('should throw an error if any other value than a string is provided', () => {
        const inputNum = 1;
        const inputBool = true;
        const inputObj = {};
      
        const validationFnNum = () => validateStringNotEmpty(inputNum);
        const validationFnBool = () => validateStringNotEmpty(inputBool);
        const validationFnObj = () => validateStringNotEmpty(inputObj);
      
        expect(validationFnNum).toThrow();
        expect(validationFnBool).toThrow();
        expect(validationFnObj).toThrow();
      });
})

 describe('validateNumber()', () => {
    it('should throw an error if NaN is provided', () => {
        const input = NaN;
        const validationFn = () => validateNumber(input);
        expect(validationFn).toThrow();
      });
      
      it('should throw an error with a message that contains a reason (invalid number)', () => {
        const input = NaN;
        const validationFn = () => validateNumber(input);
        expect(validationFn).toThrow(/Invalid number/);
      });
      
      it('should throw an error if a non-numeric value is provided', () => {
        const input = '1';
        const validationFn = () => validateNumber(input);
        expect(validationFn).toThrow();
      });
      
      it('should not throw an error, if a number is provided', () => {
        const input = 1;
        const validationFn = () => validateNumber(input);
        expect(validationFn).not.toThrow();
      });
 })