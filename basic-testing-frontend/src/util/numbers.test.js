import { describe, it, expect } from 'vitest'
import { transformToNumber, cleanNumbers } from './numbers'

describe('transformToNumber', () => {
    it('should transform string to number', () => {
        const initialValue = '1'
        const result = transformToNumber(initialValue)
    
        const createANumber = +initialValue
        expect(result).toBe(createANumber)
    })
    
    it('should yeild NaN if provided no number converted value', () => {
        const initialValue = 's'
        const result = transformToNumber(initialValue);
        
        expect(result).toBeNaN();
    })    
})

describe('cleanNumbers', () => {
 it('should return an array of number values if an array of string number values is provided', () => {
    const numberValues = ['1', '2']

    const cleanedNumbers = cleanNumbers(numberValues)

    // expect(cleanedNumbers[0]).toBeTypeOf('number')
    expect(cleanedNumbers).toEqual([1, 2])
 })

 it('should throw an error if an array with at least one empty string is provided', () => {
    const numberValues = ['', 2]

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow()
 })
})