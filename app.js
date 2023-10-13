const challenge1 = (breakfast, lunch, dinner) => {
    const mealString = `breakfast:${breakfast}, lunch:${lunch}, dinner:${dinner}`;
    return mealString;
}

const breakfast = "pancakes";
const lunch = "blt";
const dinner = "steakandchips";


const todayMeals = challenge1(breakfast, lunch, dinner);
console.log(todayMeals);

const challenge2 = (num) => {
    if (typeof num === 'string' || num <= 0) {
        return 'needs to be a positive number';
    } else if (num % 3 === 0 && num % 5 === 0) {
        return 'fizz buzz';
    } else if (num % 3 === 0) {
        return 'fizz';
    } else if (num % 5 === 0) {
        return 'buzz';
    } else {
        return num;
    }
}
const challenge3 = (num1, num2) => {
    if (isNaN(num1) || isNaN(num2)) {
        return "make sure you enter 2 numbers"
    }
    let sum = (num1 + num2);
    if (sum % 2 === 0) {
        return sum; 
    } else { return num1 * num2;}
    
}
const challenge4 = () => {
    const randomNumbers = [];

    for (let i = 0; i < 5; i++) {
        const randomNumber = Math.floor(Math.random() * 50) + 1;
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}
const challenge5 = () => {
    let numbers = [];

for (let i = 9; i >= 0; i--) {
    numbers.push(i)
}
return numbers;
}

module.exports = {
    challenge1,
    challenge2,
    challenge3,
    challenge4,
    challenge5,
}