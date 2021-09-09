const { expect } = require("chai")
const sayNumbers = require("../src/app")
const BN = require('bn.js');


describe("ALL TESTS", () => {
    it("Test the 0 case", () => {
        expect(sayNumbers(0)).to.be.equal("zero")
    })
    it("Expect to be 7", () => {
        expect(sayNumbers(7)).to.be.equal("seven")
    })
    it("Expect to be 19", () => {
        expect(sayNumbers(19)).to.be.equal("nineteen")
    })
    it("Expect to be 80", () => {
        expect(sayNumbers(80)).to.be.equal("eighty")
    })
    it("Expect to be 87", () => {
        expect(sayNumbers(87)).to.be.equal("eighty seven")
    })
    it("Expect to be 100", () => {
        expect(sayNumbers(100)).to.be.equal("one hundred")
    })
    it("Expect to be 600", () => {
        expect(sayNumbers(600)).to.be.equal("six hundred")
    })
    it("Expect to be 1000", () => {
        expect(sayNumbers(1000)).to.be.equal("one thousand")
    })
    it("Expect to be 6000", () => {
        expect(sayNumbers(6000)).to.be.equal("six thousand")
    })
    it("Expect to be 1 000 000", () => {
        expect(sayNumbers(1_000_000)).to.be.equal("one million")
    })
    it("Expect to be 1 000 000 000", () => {
        expect(sayNumbers(1_000_000_000)).to.be.equal("one billion")
    })
    it("Expect to be 1 000 000 000 000", () => {
        expect(sayNumbers(1_000_000_000_000)).to.be.equal("one trillion")
    })
    it("Expect to be 183", () => {
        expect(sayNumbers(183)).to.be.equal("one hundred eighty three")
    })
    it("Expect to be 222", () => {
        expect(sayNumbers(222)).to.be.equal("two hundred twenty two")
    })
    it("Expect to be 1183", () => {
        expect(sayNumbers(1183)).to.be.equal("one thousand one hundred eighty three")
    })
    it("Expect to be 9999", () => {
        expect(sayNumbers(9999)).to.be.equal("nine thousand nine hundred ninety nine")
    })
    it("Expect to be 10 000", () => {
        expect(sayNumbers(10_000)).to.be.equal("ten thousand")
    })
    it("Expect to be 80 000", () => {
        expect(sayNumbers(80_000)).to.be.equal("eighty thousand")
    })
    it("Expect to be 87 000", () => {
        expect(sayNumbers(87_000)).to.be.equal("eighty seven thousand")
    })

    it("Expect to be 99 999", () => {
        expect(sayNumbers(99_999)).to.be.equal("ninety nine thousand nine hundred ninety nine")
    })
    it("Expect to be 999 999", () => {
        expect(sayNumbers(999_999)).to.be.equal("nine hundred ninety nine thousand nine hundred ninety nine")
    })
    it("Expect to be 9 999 999", () => {
        expect(sayNumbers(9_999_999)).to.be.equal("nine million nine hundred ninety nine thousand nine hundred ninety nine")
    })

    it("Expect to be 99 183 183", () => {
        expect(sayNumbers(99_183_183)).to.be.equal("ninety nine million one hundred eighty three thousand one hundred eighty three")
    })
    it("Expect to be 999 999 999", () => {
        expect(sayNumbers(999_999_999)).to.be.equal("nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine")
    })
    it("Expect to be 1 000 000 000", () => {
        expect(sayNumbers(1_000_000_000)).to.be.equal("one billion")
    })

    it("Expect to be 8 999 999 999", () => {
        expect(sayNumbers(8_999_999_999)).to.be.equal("eight billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine")
    })
    it("Expect to be 88 999 999 999", () => {
        expect(sayNumbers(88_999_999_999)).to.be.equal("eighty eight billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine")
    })
    it("Expect to be 888 999 999 999", () => {
        expect(sayNumbers(888_999_999_999)).to.be.equal("eight hundred eighty eight billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine")
    })

    it("Expect to be 1 888 999 999 999", () => {
        expect(sayNumbers(1_888_999_999_999)).to.be.equal("one trillion eight hundred eighty eight billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine")
    })
    it("Expect to be 11 888 999 999 999", () => {
        expect(sayNumbers(11_888_999_999_999)).to.be.equal("eleven trillion eight hundred eighty eight billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine")
    })
    it("Expect to be 111 888 999 999 999", () => {
        expect(sayNumbers(111_888_999_999_999)).to.be.equal("one hundred eleven trillion eight hundred eighty eight billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine")
    })

    //USING WEB3 BIG NUMBER LIBRARY
    it("Expect to be 100000000000000000", () => {
        oneth_trillion = new BN('1000000000000000')
        expect(sayNumbers(oneth_trillion)).to.be.equal("one thousand trillion")
    })     
    it("Expect to be 700000000000000000", () => {
        oneth_trillion = new BN('7000000000000000')
        expect(sayNumbers(oneth_trillion)).to.be.equal("seven thousand trillion")
    })   
    
    it("Expect to be 7000000000000000000", () => {
        seventyth_trillion = new BN('70000000000000000')
        expect(sayNumbers(seventyth_trillion)).to.be.equal("seventy thousand trillion")
    })  
    it("Expect to be 70000000000000000000", () => {
        sevenhunth_trillion = new BN('700000000000000000')
        expect(sayNumbers(sevenhunth_trillion)).to.be.equal("seven hundred thousand trillion")
    })
    // it("Expect to be 10 111 888 999 999 999", () => {
    //     expect(sayNumbers(10_111_888_999_999_999)).to.be.equal("ten thousand one hundred eleven trillion eight hundred eighty eight billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine")
    // })


    ///105 105105 AND problem
    it("Expect to be 103", () => {
        expect(sayNumbers(103)).to.be.equal("one hundred and three")
    })
    it("Expect to be 103 103", () => {
        expect(sayNumbers(103_103)).to.be.equal("one hundred and three thousand one hundred and three")
    })
    it("Expect to be 103 103 103", () => {
        expect(sayNumbers(103_103_103)).to.be.equal("one hundred and three million one hundred and three thousand one hundred and three")
    })
    it("Expect to be 105 103 103 103", () => {
        expect(sayNumbers(105_103_103_103)).to.be.equal("one hundred and five billion one hundred and three million one hundred and three thousand one hundred and three")
    })
    it("Expect to be 105 105 103 103 103", () => {
        expect(sayNumbers(105_105_103_103_103)).to.be.equal("one hundred and five trillion one hundred and five billion one hundred and three million one hundred and three thousand one hundred and three")
    })
    
})
// Proposed way of writing test descriptions
// Observation: Two digit numbers that are not uniquely spelled should be separated through " - "
describe("Titi's tests", function(){
    describe("Numbers between 0 - 19", function(){
        it("should say 'zero'", function(){
            expect(sayNumbers(0)).to.equal("zero");
        });
        it("should say 'one'", function(){
            expect(sayNumbers(1)).to.equal("one");
        });
        it("should say 'ten'", function(){
            expect(sayNumbers(10)).to.equal("ten");
        });
        it("should say 'eleven'", function(){
            expect(sayNumbers(11)).to.equal("eleven");
        });
    });
    describe("Numbers between 20 - 99", function(){
        it("should say 'twenty'", function(){
            expect(sayNumbers(20)).to.equal("twenty");
        });
        it("should say 'thirty'", function(){
            expect(sayNumbers(30)).to.equal("thirty");
        });
        it("should say 'twenty one'", function(){
            expect(sayNumbers(21)).to.equal("twenty one");
        });
        it("should say 'forty five'", function(){
            expect(sayNumbers(45)).to.equal("forty five");
        });
    });
    describe("Numbers between 100 - 999", function(){
        it("should say 'one hundred'", function(){
            expect(sayNumbers(100)).to.equal("one hundred");
        });
        it("should say 'two hundred'", function(){
            expect(sayNumbers(200)).to.equal("two hundred");
        });
        it("should say 'one hundred and one'", function(){
            expect(sayNumbers(101)).to.equal("one hundred and one");
        });
        it("should say 'nine hundred and three", function(){
            expect(sayNumbers(903)).to.equal("nine hundred and three");
        });
        it("should say 'six hundred seventy eight", function(){
            expect(sayNumbers(678)).to.equal("six hundred seventy eight");
        });
        it("should say 'nine hundred fifty three", function(){
            expect(sayNumbers(953)).to.equal("nine hundred fifty three");
        })
    });
    describe("Numbers between 1000 - 999999", function(){
        it("should say 'one thousand'", function(){
            expect(sayNumbers(1000)).to.equal("one thousand");
        });
        it("should say 'four thousand'", function(){
            expect(sayNumbers(4000)).to.equal("four thousand");
        });
        it("should say 'ten thousand", function(){
            expect(sayNumbers(10000)).to.equal("ten thousand");
        });
        it("should say 'twenty two thousand", function(){
            expect(sayNumbers(22000)).to.equal("twenty two thousand");
        });
        it("should say 'nine hundred ninety nine thousand nine hundred ninety nine", function(){
            expect(sayNumbers(999999)).to.equal("nine hundred ninety nine thousand nine hundred ninety nine");
        });
    });
    describe("Numbers between 1000000 - 999999999", function(){
        it("should say 'one million'", function(){
            expect(sayNumbers(1000000)).to.equal("one million");
        });
        it("should say 'one hundred twenty three million four hundred fifty six thousand seven hundred eighty nine", function(){
            expect(sayNumbers(123456789)).to.equal("one hundred twenty three million four hundred fifty six thousand seven hundred eighty nine");
        });
    });
    describe("Numbers between 1000000000 - 999999999999", function(){
        it("should say 'one billion'", function(){
            expect(sayNumbers(1000000000)).to.equal("one billion");
        });
        it("should say 'one billion and one'", function(){
            expect(sayNumbers(1000000001)).to.equal("one billion and one");
        });
        it("should say 'two hundred forty six billion one hundred thirty five million nine hundred eighty seven thousand one hundred eleven", function(){
            expect(sayNumbers(246135987111)).to.equal("two hundred forty six billion one hundred thirty five million nine hundred eighty seven thousand one hundred eleven");
        });
    });
    describe("Numbers between 1000000000000 - 999999999999999", function(){
        it("should say 'one trillion'", function(){
            expect(sayNumbers(1000000000000)).to.equal("one trillion");
        });
        it("should say 'five hundred and five trillion four hundred and four billion three hundred and three million two hundred and two thousand one hundred and one", function(){
            expect(sayNumbers(505404303202101)).to.equal("five hundred and five trillion four hundred and four billion three hundred and three million two hundred and two thousand one hundred and one");
        });
    });
});