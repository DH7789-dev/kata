
export class Utils{

    pushNumberOfArray(array: number[],number: number){
        for(let increment=0;increment<number;increment++){
            array.push(increment);
        }
    }

    getRandomInt(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }


    isPrimeNumber(number: number): boolean{
        if (number<2) return false;
        for (let i = 2; i <= Math.sqrt(number); i++){
            if (number % i == 0){return false;}
        }
        return true;
    }

    isNotPositifNumber(number: number): boolean{
        if(number < 0){
            return false;
        }
        return true
    }

}