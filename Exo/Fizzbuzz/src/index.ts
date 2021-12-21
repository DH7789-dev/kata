import {FizzBuzz} from "./FizzBuzz"
import {Utils} from "./Utils";

console.log("Kata FizzBuzz en TS")

let fizzBuzz : FizzBuzz;
fizzBuzz = new FizzBuzz();
let utils : Utils;
utils = new Utils();

const arrayOfNumber : number[] = []
utils.pushNumberOfArray(arrayOfNumber,utils.getRandomInt(1,100))

console.log("FizzBuzz: "+arrayOfNumber.length)
fizzBuzz.game(arrayOfNumber);