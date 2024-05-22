import { validateNotEmpty } from './validation';
import { ValidationError } from './errors.js';
import { describe, it, expect, beforeEach } from 'vitest';

describe('validateNotEmpty', () => {
  let errorMessage;

  beforeEach(() => {
    errorMessage = 'Field cannot be empty';
  });

  it('should throw ValidationError if text is empty', () => {
    expect(() => {
      validateNotEmpty('', errorMessage);
    }).toThrow(ValidationError);
  });

  it('should throw ValidationError if text contains only whitespace', () => {
    expect(() => {
      validateNotEmpty('   ', errorMessage);
    }).toThrow(ValidationError);
  });

  it('should not throw ValidationError if text is not empty', () => {
    expect(() => {
      validateNotEmpty('some text', errorMessage);
    }).not.toThrow();
  });

  it('should not throw ValidationError if text contains leading or trailing whitespace', () => {
    expect(() => {
      validateNotEmpty('  some text  ', errorMessage);
    }).not.toThrow();
  });
});