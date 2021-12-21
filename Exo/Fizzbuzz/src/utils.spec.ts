import {Utils} from "./Utils";
import {should} from "chai";
should();

describe('When make test fonction utils', ()=>{

    let utils : Utils;
    beforeEach(() => {
        utils = new Utils();
    });


    describe('When make test for negative Number',()=>{

        it('should return Cannot fizzbuzz negative numbers to number negatif  ', () => {
            utils.isNotPositifNumber(-10).should.equal(false)
        });

        it('should return Cannot fizzbuzz negatives numbers to numbers negatifs', () => {
            utils.isNotPositifNumber(4).should.equal(true)
        });

    })


    describe('When make test for premier Number',()=>{

        it('should return true to premier Number ', () => {
            utils.isPrimeNumber(2).should.equal(true)
        });

        it('should return false to premier Number ', () => {
            utils.isPrimeNumber(1).should.equal(false)
        });

    })


})

