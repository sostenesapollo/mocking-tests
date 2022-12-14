const chai = require('chai')
const { isVowel } = require('../src/letter-functions')
const expect = chai.expect

describe('src/letter-functions.js', ()=>{

    describe('isVowel()', ()=>{
        it('Should return true to letter a', ()=> {
            expect(isVowel('a')).to.equal(true)
        })
        it('Should return true to letter e', ()=> {
            expect(isVowel('e')).to.equal(true)
        })
        it('Should return true to letter i', ()=> {
            expect(isVowel('i')).to.equal(true)
        })
        
        it('Should return true to letter o', ()=> {
            expect(isVowel('o')).to.equal(true)
        })

        it('Should return true to letter u', ()=> {
            expect(isVowel('u')).to.equal(true)
        })

        it('Should return true to letter u', ()=> {
            expect(isVowel('u')).to.equal(true)
        })
    })

})