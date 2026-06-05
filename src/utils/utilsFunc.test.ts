import { formatMarketCap, bubbleSortWithDoubleArray } from './utilsFunc'

describe("formatMarketCap", () => {
    test('Trillion', () => {
        const result = formatMarketCap(1000000000000)
        expect(result).toBe('1.000T')
    })

    test('Billion', () => {
        const result = formatMarketCap(1000000000)
        expect(result).toBe('1.0B')
    })

    test('Million', () => {
        const result = formatMarketCap(1000000)
        expect(result).toBe('1.0M')
    })
})

test("bubbleSortWithDoubleArray", () => {
    const result = bubbleSortWithDoubleArray([['1', 1], ['3', 3], ['67', 67], ['22', 222], ['12', 12], ['5', 5]])
    expect(result).toEqual([['1', 222], ['3', 67], ['67', 12], ['22', 5], ['12', 3], ['5', 1]])
})