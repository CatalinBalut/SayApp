const { expect } = require("chai")
const say = require("../src/app")
describe("ALL TESTS", () => {
    it("Test the 0 case", () =>{
        expect(say(0)).to.be.equal("zero")
    })
})