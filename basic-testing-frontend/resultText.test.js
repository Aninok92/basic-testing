import {it, expect } from 'vitest'
import { getResultText } from './resultText'

it('sould return a string, no matter which value is passed', () => {
    const numValue = 1
    const stringValue = 'string'
    const booleanValue = false

    const numResult = getResultText(numValue);
    const stringResult = getResultText(stringValue);
    const booleanResult = getResultText(booleanValue);
    
    expect(numResult).toBeTypeOf('string');
    expect(stringResult).toBeTypeOf('string');
    expect(booleanResult).toBeTypeOf('string');
})

it('should return a string that contains the calculation result if a number is provided as a result', () => {
    const result = 5;

    const resultText = getResultText(result);

    expect(resultText).toContain(result.toString());
  });

  it('should return an empty string if "no-calc" is provided as a result', () => {
    const result = 'no-calc';

    const resultText = getResultText(result);

    expect(resultText).toBe('');
  });

  it('should return a string that contains "Invalid" if "invalid" is provided as a result', () => {
    const result = 'invalid';

    const resultText = getResultText(result);

    expect(resultText).toContain('Invalid');
  });