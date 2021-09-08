const { expect } = require("chai")
const sayNumbers = require("../src/app")
describe("ALL TESTS", () => {
    it("Test the 0 case", () =>{
        expect(sayNumbers(0)).to.be.equal("zero")
    })
    it("Expect to be 7", ()=>{
        expect(sayNumbers(7)).to.be.equal("seven")
    })
    it("Expect to be 19", ()=>{
        expect(sayNumbers(19)).to.be.equal("nineteen")
    })
    it("Expect to be 80", ()=>{
        expect(sayNumbers(80)).to.be.equal("eighty")
    })
    it("Expect to be 87", ()=>{
        expect(sayNumbers(87)).to.be.equal("eighty seven")
    })
})