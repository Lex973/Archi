import type {JSX} from "react";
import type {CoinsData} from "../types.ts";

export const formatMarketCap = function (number: number) {
    if (number > 1_000_000_000) {
        return `${(number / 1_000_000_000_000).toFixed(3)}T`
    }
    if (number >= 1_000_000_000) {
        return `${(number / 1_000_000_000).toFixed(1)}B`
    }
    if (number >= 1_000_000) {
        return `${(number / 1_000_000).toFixed(1)}M`
    }
    return number.toString()
}

export const formatVolume = function (number: number) {
    if (number >= 1_000_000_000) {
        return `${(number / 1_000_000_00).toFixed(1)}B`
    }
    if (number >= 1_000_000) {
        return `${(number / 1_000_000).toFixed(1)}M`
    }
    return number
}


// useless функция, но очень хотелось пощупать пузырьковую сортировку
export const bubbleSortWithDoubleArray = function (arr: [string, number][]) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++ ) {
            if (arr[j][1] < arr[j + 1][1]) {
                const arrJ = arr[j + 1][1];
                arr[j + 1][1] = arr[j][1]
                arr[j][1] = arrJ
            }
        }
    }

    return arr
}

export const formatDate = function (date: string) {
    const NewDate = new Date(date)
    const time = date.split('T')[1].slice(0, 5)
    return `${NewDate.toLocaleDateString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric',
    })} (${time})`
}


export const createSkeletonArray = (length: number, renderItem: (i: number) => JSX.Element) => {
    return Array.from({length: length}, (_, i) => {
        return renderItem(i)
    })
}


export const sortCoinsConverterQuery = (arr: CoinsData[], query: string) => {
    return arr.filter(coin => coin.id.includes(query) || coin.name.includes(query.toUpperCase()))
}


export const validateConverterResult = (value: number): string => {
    if (value >= 1_000_000) return value.toFixed(2)
    if (value >= 1_000) return value.toFixed(4)
    if (value >= 1) return value.toFixed(6)
    if (value === 0) return value.toFixed(0)
    return value.toFixed(8)
}