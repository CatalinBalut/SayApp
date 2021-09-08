const single_digits = {
    0: "", 1: "one", 2: "two", 3: "three", 4: "four",
    5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine"
};
const zero_nineteen_numbers = {
    10: "ten", 11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen",
    15: "fifteen", 16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen"
};
const rest_of_digits = {
    0: "",
    20: "twenty", 30: "thirty", 40: "forty", 50: "fifty",
    60: "sixty", 70: "seventy", 80: "eighty", 90: "ninety",
    100: "hundred", 1000: "thousand", 1_000_000: "million", 1_000_000_000: "billion",
    1_000_000_000_000: "trillion"
};

function digitCount(num) {
    if(num === 0 ) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
  }

sayNumbers = (number) => {
    switch (digitCount(number)) {
        case 1:
            // code block
            return (number === 0 ? `zero` : single_digits[number]);
        case 2:
            return (number <= 19 ? zero_nineteen_numbers[number]
                : `${rest_of_digits[number - number % 10]} ${single_digits[number % 10]}`);
        case 3:
            return (number % 100 === 0 ? `${single_digits[Math.floor(number / 100) % 10]} ${rest_of_digits[100]}`
                : `${single_digits[Math.floor(number / 100) % 10]} ${rest_of_digits[100]} ${sayNumbers(number % 100)}`);
        case 4:
            return (number % 1000 === 0 ?
                `${single_digits[Math.floor(number / 1000) % 10]} ${rest_of_digits[1000]}`
                : `${single_digits[Math.floor(number / 1000) % 10]} ${rest_of_digits[1000]} ${sayNumbers(number % 1000)}`);
        case 5:
            return (number % 10_000 === 0 ?
                `${sayNumbers(Math.floor(number / 1000) % 100)} ${rest_of_digits[1000]}`
                :`${sayNumbers(Math.floor(number / 1000) % 100)} ${rest_of_digits[1000]} ${sayNumbers(number % 1000)}`);
        case 6:
            return (number % 100_000 === 0 ?
                `${sayNumbers(Math.floor(number / 1000) % 1000)} ${rest_of_digits[1000]}`
                :`${sayNumbers(Math.floor(number / 1000) % 1000)} ${rest_of_digits[1000]} ${sayNumbers(number % 1000)}`);
        case 7: //1_000_000
        return (number % 1_000_000 === 0 ?
            `${sayNumbers(Math.floor(number / 1_000_000) % 1_000_000)} ${rest_of_digits[1_000_000]}`
            :`${sayNumbers(Math.floor(number / 1_000_000) % 1_000_000)} ${rest_of_digits[1_000_000]} ${sayNumbers(number % 1_000_000)}`);
        case 8:
            return (number % 10_000_000 === 0 ?
                `${sayNumbers(Math.floor(number / 1_000_000) % 10_000_000)} ${rest_of_digits[1_000_000]}`
                :`${sayNumbers(Math.floor(number / 1_000_000) % 10_000_000)} ${rest_of_digits[1_000_000]} ${sayNumbers(number % 1_000_000)}`);
        case 9:
            return (number % 100_000_000 === 0 ?
                `${sayNumbers(Math.floor(number / 1_000_000) % 100_000_000)} ${rest_of_digits[1_000_000]}`
                :`${sayNumbers(Math.floor(number / 1_000_000) % 100_000_000)} ${rest_of_digits[1_000_000]} ${sayNumbers(number % 1_000_000)}`);
        case 10:
            return `one billion`
        case 11:
            return false
        case 12:
            return false
        case 13:
            return `one trillion`
        case 14:
            return false
        case 15:
            return false
        default:
        // code block
    }





    if (number >= 0 && number <= 9) {
        return (number === 0 ? `zero` : single_digits[number]);
    } else if (number <= 19) {
        return zero_nineteen_numbers[number]
        //works 10 20 30 and also for 22 23 24
    } else if (number <= 99) {
        return `${rest_of_digits[number - number % 10]} ${single_digits[number % 10]}`
    } else if (number <= 999) {
        return (number % 100 === 0 ? `${single_digits[Math.floor(number / 100) % 10]} ${rest_of_digits[100]}`
            : `${single_digits[Math.floor(number / 100) % 10]} ${rest_of_digits[100]} ${sayNumbers(number % 100)}`);

    } else if (number <= 9_999) {
        return (number % 1000 === 0 ?
            `${single_digits[Math.floor(number / 1000) % 10]} ${rest_of_digits[1000]}`
            : `${single_digits[Math.floor(number / 1000) % 10]} ${rest_of_digits[1000]} ${sayNumbers(number % 1000)}`);


    }
    else if (number % 1_000_000 === 0 && number <= 999_999_999) {
        return `one million`
    } else if (number % 1_000_000_000 === 0 && number <= 999_999_999_999) {
        return `one billion`
    } else if (number % 1_000_000_000_000 === 0 && number <= 999_999_999_999_999) {
        return `one trillion`
    }
}

module.exports = sayNumbers