// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(arr){
    return arr.slice(0,2);
}

const returnLastTwoDrivers = function(arr){
    return arr.slice(2,4);
}


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(value){
    return function(){
        return value * value;
    }
}

const fareDoubler = function(fare){
    return fare * 2;
}

const fareTripler = function(fare){
    return fare * 3;
}

function selectDifferentDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers);
}