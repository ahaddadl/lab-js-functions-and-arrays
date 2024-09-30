// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1,num2) {
    let biggestNumber;
    if (num1 > num2) {
        biggestNumber = num1
    } else if (num2 > num1) {
        biggestNumber = num2
    } else if (num1 === num2) {
        biggestNumber = num1
    }
    return biggestNumber
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(array) {
    if (array.length === 0) {
        return null
    }

    let longetsWord = '';
    for (let i = 0; i < array.length; i++) {
        let word = array[i];
        if (word.length > longetsWord.length) {
            longetsWord = word
        }
    }
    return longetsWord 
}




// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(array) {
    let sumArray = 0;
    for (let i = 0; i < array.length; i++) {
        let numberArray = array[i];
        sumArray +=numberArray
    }
    return sumArray
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(array) {
    if (array.length === 0 ) {
        return 0
    }
    return sumNumbers(array) / array.length
}




// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(array, wordSearch) {
    if (array.length === 0) {
    return null
    }
    let exist = false;
    for (let i = 0; i < array.length; i++) {
        let word = array[i];
        if (word === wordSearch) {
            exist = true 
        }
    }
    return exist
}
