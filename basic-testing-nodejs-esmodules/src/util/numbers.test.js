import { it, expect } from 'vitest'
import { transformToNumber } from './numbers'

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
