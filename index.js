const returnFirstTwoDrivers = function (arr) {
    const newArr = arr.slice(0, 2)
    return newArr
}

const returnLastTwoDrivers = function (arr) {
    const newArr = arr.slice(arr.length - 2, arr.length)
    return newArr
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (int) {
    return function (fare) {
        return int * fare
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (arr, func) {
    return func(arr)
}