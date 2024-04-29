import {it, expect } from 'vitest'
import { add } from './math'

it('should correct sum the numbers', () => {
    const numbers = [1, 2, 3]
    const result = add(numbers)

    const expectedValue = numbers.reduce((a, b)=>{
       return a + b
    }, 0)

    expect(result).toBe(expectedValue)
})

it('should correct sum the string number', () => {
    const numbers = ['1', '2', '3']
    const result = add(numbers)

    const expectedValue = numbers.reduce((a, b)=>{
       return +a + +b
    }, 0)

    expect(result).toBe(expectedValue)
})

it('should correctly sum when the array is empty', () => {
    const numbers = []
    const result = add(numbers)

    const expectedValue = numbers.reduce((a, b)=>{
       return +a + +b
    }, 0)

    expect(result).toBe(expectedValue)
})

it('should return NaN if one of the array elements is not a number', () => {
    const numbers = [1, 'js']
    const result = add(numbers)

    expect(result).toBeNaN()
})

it('should throw an error if no value is passed into the function', () => {
    const resultFn = () => {
        add();
    }

    expect(resultFn).toThrow()
})

it('should throw an error if provided with multiple args instead of an array', () => {
    const num1 = 1
    const num2 = 2
    
    const resultFn = () => {
        add(num1, num2);
    }

    expect(resultFn).toThrow(/is not iterable/)
})