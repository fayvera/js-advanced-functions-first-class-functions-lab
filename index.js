// Code your solution in this file!
const returnFirstTwoDrivers = function(array) {
    return array.slice(0, 2)
}

const returnLastTwoDrivers = function(array) {
    return array.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(i) {
    return function(value){ 
        return value * i
    }
}

const fareDoubler = function(f) {
    return f * 2
}   

const fareTripler = function(f) {
    return f * 3
}

const selectDifferentDrivers = function(arrayOfDrivers, functionDrivers) {
    return functionDrivers(arrayOfDrivers)
}