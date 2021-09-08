const single_digits = {
    0: "zero", 1: "one", 2: "two", 3: "three", 4: "four",
    5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine"
};
const zero_nineteen_numbers = {
    10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen",
    15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen"
};
const rest_of_digits = {
    20: "twenty", 30: "thirty", 40: "forty", 50: "fifty",
    60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety",
    100:"hundred",1000:"thousand", 1_000_000:"million", 1_000_000_000:"billion",
     1_000_000_000_000:"trillion"
};
sayNumbers = (number) => {
    if (number >= 0 && number <= 9) {
        return single_digits[number]
    } else if (number <= 19) {
        return zero_nineteen_numbers[number]
    } else if (number <= 90 && number % 10 === 0) {
        return rest_of_digits[number]
    } else if (number <= 99) {
        return `${rest_of_digits[number - number % 10]} ${single_digits[number % 10]}`
    } else if(number % 100 === 0  && number<=999){
        return `${single_digits[Math.floor(number /100) % 10]} ${rest_of_digits[100]}`
    } else if (number % 1000 === 0 && number <=999_999){
        return `${single_digits[Math.floor(number /1000) % 10]} ${rest_of_digits[1000]}`
    } else if(number % 1_000_000 === 0 && number <=999_999_999){
        return `one million`
    }else if (number % 1_000_000_000 === 0 && number <=999_999_999_999){
        return `one billion`
    }else if (number % 1_000_000_000_000 === 0 && number <=999_999_999_999_999){
        return `one trillion`
    }
}

module.exports = sayNumbers