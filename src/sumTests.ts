import { expect, test, it } from 'vitest';
import { sum } from './sum';

test('adds 1 + 1 to equal 2', () => {
    expect(sum(1,1)).toBe(2)
})

it('should return 3 when given 1+2', () => {
    expect(sum(1,2)).toBe(3)
})

it('should return 0 when the result is NaN', () => {
    expect(sum(1,NaN)).toBe(0)
})