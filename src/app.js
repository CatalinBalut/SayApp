const BN = require('bn.js');

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
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

sayNumbers = (number) => {
    //depend of number of digits the case will choose the format
    //if the number is <15 digits it is a normal integer, else it have to be a BN NUMBER
    if (digitCount(number) <= 15) {
        switch (digitCount(number)) {
            case 1:
                return (number === 0 ? `zero` : single_digits[number]);
            case 2://40 si 44 trebe tratat diferit cu inca un ternar
                return (number <= 19 ? `${zero_nineteen_numbers[number]}`
                    : (number % 10 === 0) ? `${rest_of_digits[number - number % 10]}`
                        : `${rest_of_digits[number - number % 10]} ${single_digits[number % 10]}`)
            case 3:
                return (number % 100 === 0 ? `${single_digits[Math.floor(number / 100) % 10]} ${rest_of_digits[100]}`
                    : (number % 100 - number % 10 === 0) ? `${single_digits[(number - number % 100) / 100]} ${rest_of_digits[100]} and ${single_digits[number % 10]}`
                        : `${single_digits[Math.floor(number / 100) % 10]} ${rest_of_digits[100]} ${sayNumbers(number % 100)}`);
            case 4:
                return (number % 1000 === 0 ?
                    `${single_digits[Math.floor(number / 1000) % 10]} ${rest_of_digits[1000]}`
                    : `${single_digits[Math.floor(number / 1000) % 10]} ${rest_of_digits[1000]} ${sayNumbers(number % 1000)}`);
            case 5:
                return (number % 1_000 === 0 ?
                    `${sayNumbers(Math.floor(number / 1000) % 100)} ${rest_of_digits[1000]}`
                    : `${sayNumbers(Math.floor(number / 1000) % 100)} ${rest_of_digits[1000]} ${sayNumbers(number % 1000)}`);
            case 6:
                return (number % 1_000 === 0 ?
                    `${sayNumbers(Math.floor(number / 1000) % 1000)} ${rest_of_digits[1000]}`
                    : `${sayNumbers(Math.floor(number / 1000) % 1000)} ${rest_of_digits[1000]} ${sayNumbers(number % 1000)}`);
            case 7: //1_000_000
                return (number % 1_000_000 === 0 ?
                    `${sayNumbers(Math.floor(number / 1_000_000) % 1_000_000)} ${rest_of_digits[1_000_000]}`
                    : `${sayNumbers(Math.floor(number / 1_000_000) % 1_000_000)} ${rest_of_digits[1_000_000]} ${sayNumbers(number % 1_000_000)}`);
            case 8:
                return (number % 1_000_000 === 0 ?
                    `${sayNumbers(Math.floor(number / 1_000_000) % 10_000_000)} ${rest_of_digits[1_000_000]}`
                    : `${sayNumbers(Math.floor(number / 1_000_000) % 10_000_000)} ${rest_of_digits[1_000_000]} ${sayNumbers(number % 1_000_000)}`);
            case 9:
                return (number % 1_000_000 === 0 ?
                    `${sayNumbers(Math.floor(number / 1_000_000) % 100_000_000)} ${rest_of_digits[1_000_000]}`
                    : `${sayNumbers(Math.floor(number / 1_000_000) % 100_000_000)} ${rest_of_digits[1_000_000]} ${sayNumbers(number % 1_000_000)}`);
            case 10: //one billion
                return (number % 1_000_000_000 === 0 ?
                    `${sayNumbers(Math.floor(number / 1_000_000_000) % 1_000_000_000)} ${rest_of_digits[1_000_000_000]}`
                    : `${sayNumbers(Math.floor(number / 1_000_000_000) % 1_000_000_000)} ${rest_of_digits[1_000_000_000]} ${sayNumbers(number % 1_000_000_000)}`);
            case 11:
                return (number % 1_000_000_000 === 0 ?
                    `${sayNumbers(Math.floor(number / 1_000_000_000) % 10_000_000_000)} ${rest_of_digits[1_000_000_000]}`
                    : `${sayNumbers(Math.floor(number / 1_000_000_000) % 10_000_000_000)} ${rest_of_digits[1_000_000_000]} ${sayNumbers(number % 1_000_000_000)}`);
            case 12:
                return (number % 1_000_000_000 === 0 ?
                    `${sayNumbers(Math.floor(number / 1_000_000_000) % 100_000_000_000)} ${rest_of_digits[1_000_000_000]}`
                    : `${sayNumbers(Math.floor(number / 1_000_000_000) % 100_000_000_000)} ${rest_of_digits[1_000_000_000]} ${sayNumbers(number % 1_000_000_000)}`);
            case 13:
                return (number % 1_000_000_000_000 === 0 ?
                    `${sayNumbers(Math.floor(number / 1_000_000_000_000) % 1_000_000_000_000)} ${rest_of_digits[1_000_000_000_000]}`
                    : `${sayNumbers(Math.floor(number / 1_000_000_000_000) % 1_000_000_000_000)} ${rest_of_digits[1_000_000_000_000]} ${sayNumbers(number % 1_000_000_000_000)}`);
            case 14:
                return (number % 1_000_000_000_000 === 0 ?
                    `${sayNumbers(Math.floor(number / 1_000_000_000_000) % 10_000_000_000_000)} ${rest_of_digits[1_000_000_000_000]}`
                    : `${sayNumbers(Math.floor(number / 1_000_000_000_000) % 10_000_000_000_000)} ${rest_of_digits[1_000_000_000_000]} ${sayNumbers(number % 1_000_000_000_000)}`);
            case 15:
                return (number % 1_000_000_000_000 === 0 ?
                    `${sayNumbers(Math.floor(number / 1_000_000_000_000) % 100_000_000_000_000)} ${rest_of_digits[1_000_000_000_000]}`
                    : `${sayNumbers(Math.floor(number / 1_000_000_000_000) % 100_000_000_000_000)} ${rest_of_digits[1_000_000_000_000]} ${sayNumbers(number % 1_000_000_000_000)}`);
        }
    }
    else {//number % 100 - number % 10 === 0)
        oneth_trillion = new BN('1000000000000000')
        onehu_trillion = new BN('100000000000000')
        one_trillion = new BN('1000000000000')
        switch (digitCount(number)) {
            case 16: //1_000_000_000_000_000
                return (number.mod(onehu_trillion).isZero() ?
                    `${sayNumbers(number.div(one_trillion))} trillion`// ${sayNumbers(number.mod(onehu_trillion) - number.mod(onehu_trillion))}`
                    : `aaa`);
            case 17:
                return (number.mod(onehu_trillion).isZero() ?
                    `${sayNumbers(number.div(one_trillion))} trillion`
                    : `aaa`);
            case 18:
                return (number.mod(onehu_trillion).isZero() ?
                    `${sayNumbers(number.div(one_trillion))} trillion`
                    : `aaa`);
            default: return "chill dude"
        }
    }

    // number - (number%  10**(length-1))        
    //daca valoare depasste 1000 de trilioane facem string, despartim in 2 si scriem sutele de trilione apoi facem apel la fucntiee
    //pt nr ce intraa in case
    //nivelu de zeci sute si mii de trilioane


}



module.exports = sayNumbers