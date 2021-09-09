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
        expect(sayNumbers(80)).to.be.equal("eighty ")
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
    // it("Expect to be 1 111 888 999 999 999", () => {
    //     expect(sayNumbers(BN('1111888999999999'))).to.be.equal("one thousand one hundred eleven trillion eight hundred eighty eight billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine")
    // })
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