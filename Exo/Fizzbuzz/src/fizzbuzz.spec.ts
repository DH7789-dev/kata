
import { should } from 'chai';
import {FizzBuzz} from "./FizzBuzz";


should();

describe('When make test for FizzBuzz Kata', ()=>{

    let fizzbuzz : FizzBuzz;


    beforeEach(() => {
        fizzbuzz = new FizzBuzz();
    });

    describe('When make test for fizz', () => {

        describe('When make test for neutral Number',()=>{

            it('should return neutral number ', () => {
                fizzbuzz.game([1]).should.equal("1")
            });

            it('should return multiple neutral number ', () => {
                fizzbuzz.game([1,1,1,1]).should.equal("1111")
            });

        })

        it('should return Fizz when 1 number divisible for three', () => {
            fizzbuzz.game([3]).should.equal("Fizz")
        });
        it('should return multiple neutral number ', () => {
            fizzbuzz.game([3,6,9,12]).should.equal("FizzFizzFizzFizz")
        });

    });

    describe('When make test for buzz', () => {

        it('should return buzz when 1 number divisible for five', () => {
             fizzbuzz.game([5]).should.equal("Buzz")
        });
        it('should return multiple neutral number ', () => {
            fizzbuzz.game([5,10,20,25]).should.equal("BuzzBuzzBuzzBuzz")
        });

    });

    describe('When make test for fizzbuzz',()=>{

        it('should return FizzBuzz when 1 number divisible for three and five ', () => {
             fizzbuzz.game([15]).should.equal("Fizzbuzz")
        });
        it('should return multiple neutral number ', () => {
            fizzbuzz.game([15,30,60,90]).should.equal("FizzbuzzFizzbuzzFizzbuzzFizzbuzz")
        });

    })

    describe('When make test for differents Number between 1 and 100',()=>{

        it('should return aleatoire depending to number aleatoire ', () => {
            fizzbuzz.game([1,2,4,22,30,10,3,9,15,88,100]).should.equal("12422FizzbuzzBuzzFizzFizzFizzbuzz88Buzz")
        });

        it('should return number order for 20 first number ', () => {
            fizzbuzz.game([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]).should.equal("12Fizz4BuzzFizz78FizzBuzz11Fizz1314Fizzbuzz1617Fizz19Buzz")
        });

    })

})


