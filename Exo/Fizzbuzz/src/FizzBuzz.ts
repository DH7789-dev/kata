import {Utils} from "./Utils";

export class FizzBuzz {

    private nameDivisibleByThree : String = "Fizz";
    private nameDivisibleByFive : String = "Buzz";
    private nameDivisibleByThreeAndFive : String = "Fizzbuzz";
    private nameNotNegativeNumbers : String = "Cannot fizzbuzz negative numbers";
    private utils : Utils = new Utils();

    

    game(studentsNumber : number[]): String {
        let resultGame: String = "";
        for (let number = 0; number < studentsNumber.length; number++) {

            if(this.utils.isNotPositifNumber(studentsNumber[number])){
                // @ts-ignore
                resultGame += this.resultStringFizzBuzz(studentsNumber[number]);
            }else {
                resultGame = this.nameNotNegativeNumbers
            }
        }
        return resultGame

    }

    resultStringFizzBuzz(number: number): String{
        if (number % 5 === 0 &&  number % 3 === 0){
            console.log("FizzBuzz")
            return  this.nameDivisibleByThreeAndFive;
        }
        else if (number % 3 == 0){
            console.log("Fizz")
            return  this.nameDivisibleByThree;
        }
        else if (number % 5 == 0){
            console.log("Buzz")
            return  this.nameDivisibleByFive;
        }
        else{
            console.log(number)
            return String(number)
        }
    }





}