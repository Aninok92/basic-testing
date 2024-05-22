import { HttpError, ValidationError } from './errors';
import { describe, it, expect } from 'vitest';

describe('HttpError', () => {
  it('should create HttpError instance with correct properties', () => {
    const statusCode = '404';
    const message = 'Not Found';
    const data = { reason: 'Resource not found' };

    const error = new HttpError(statusCode, message, data);

    expect(error.statusCode).toBe(statusCode);
    expect(error.message).toBe(message);
    expect(error.data).toBe(data);
  });
});

describe('ValidationError', () => {
  it('should create ValidationError instance with correct message', () => {
    const errorMessage = 'Validation failed';

    const error = new ValidationError(errorMessage);

    expect(error.message).toBe(errorMessage);
  });
});