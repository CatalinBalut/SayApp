const single_digits = {
    0:"zero", 1:"one", 2:"two", 3:"three", 4:"four",
    5:"five", 6:"six", 7:"seven", 8:"eight", 9:"nine"
};
sayNumbers = (number) =>{
    if(number >= 0 && number <= 9) return single_digits[number]
}

module.exports = sayNumbers