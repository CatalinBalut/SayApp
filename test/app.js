const { expect } = require("chai")
const sayNumbers = require("../src/app")
describe("ALL TESTS", () => {
    it("Test the 0 case", () =>{
        expect(sayNumbers(0)).to.be.equal("zero")
    })
    it("Expect to be 7", ()=>{
        expect(sayNumbers(7)).to.be.equal("seven")
    })
})