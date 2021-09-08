const { expect } = require("chai")
const sayNumbers = require("../src/app")
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
})