//Celcius_Farhenheit
{
    const CELCIUS=1;
    const FARHENHEIT=2;
    function convert(value,type){
        switch(type){
        case CELCIUS:
            if(value>100||value<0){
                console.log("Not allowed");
                return;
            }
            else
            {
                let far=32+(value*9/5);
                return far;
            }
            case FARHENHEIT:
                if(value>212||value<32){
                    console.log("Not allowed");
                    return;
                }
                else
                {
                    let cel=(value-32)*5/9;
                    return cel;
                }
                default:
                    return "Undefined type"
                
        }
        


    }
    console.log(convert(42,CELCIUS));
    console.log(convert(100,FARHENHEIT));
    convert(213,FARHENHEIT);
    convert(134,CELCIUS);
    console.log(convert(100,5));

}
//Palindrome-Prime
{
    function isPalindrome(value){
        let copyNumber=value;
        let reversedNumber=0;
        let currentDigit=0;
        while(value>0){
         currentDigit = value % 10;
         reversedNumber = (reversedNumber * 10) + currentDigit;
         value= Math.floor(value / 10);
        }
        if(copyNumber===reversedNumber){
            console.log("Issa palindrome");
            return true;
        }
        else {
            console.log("NOt a palindrome");
            return false;
        }
    }
    isPalindrome(353);
    isPalindrome(455);


    function isPrime(value){
        flag=true;
        for(let i=2;i<Math.floor(value/2);i++){
            if(value%i==0){
                flag=false;
                break;
            }
        }
        if(flag==true){
            console.log("Prime!");
            return true;
        }
        else{
            console.log("NOt a prime!");
            return false;
        }

    }
    console.log(isPrime(97));
    isPrime(46);
}
//Powers of 2 with restriction
{
    function powerOf2(value){
        for(let i=0;i<=value;i++){
            if(Math.pow(2,i)>256){
                break;
            }
            console.log(Math.pow(2,i));
        }
    }
    powerOf2(9);
}
//Factorial
{
    function factorial(value){
        let result=1;
        while(value!=0){
            result=result*value;
            value--;
        }
        console.log(result);
    }
   factorial(5);
   isPrime(5);
}
//Method of getting prime factors
{
    function isPrime(value){
        flag=true;
        for(let i=2;i<Math.floor(value/2);i++){
            if(value%i==0){
                flag=false;
                break;
            }
        }
        if(flag==true){
            return true;
        }
        else{
            return false;
        }

    }
    function primeFactors(num){
        const result = [];
         for (let i = 2; i <= num; i++){
    while (isPrime(i) && num % i === 0){
      if (!result.includes(i)) result.push(i);
      num /= i;
    }
  }
  return result;
}
const prompt = require('prompt-sync')();
let number = parseInt(prompt("Enter a number "));
console.log(primeFactors(number));
}
//Method of getting prime numbers within a range
{
    function isPrime(value){
        flag=true;
        for(let i=2;i<Math.floor(value/2);i++){
            if(value%i==0){
                flag=false;
                break;
            }
        }
        if(flag==true){
            return true;
        }
        else{
            return false;
        }

    }
    function getPrimeWithinRange(start,end){
        for(let i=start;i<=end;i++){
            if(isPrime(i)){
                console.log(i);
            }
        }
    }
    const prompt = require('prompt-sync')();
    let start = parseInt(prompt("Enter start "));
    let end = parseInt(prompt("Enter end "));
    getPrimeWithinRange(start,end);
}
//Method to find Nth harmonic number
{

    function nthHarmonic(number){
        let harmonic=1;
        for(let i=2;i<=number;i++){
            harmonic=harmonic+ 1/number;
        }
        return harmonic;

    }
    const prompt = require('prompt-sync')();
    let number = parseInt(prompt("Enter a number "));
    console.log(nthHarmonic(number))
}
//Head-Tail
{
    function toss() {
        const HEAD = 0;
        const TAIL = 1;
        let toss = 0;
        let heads=0;
        let tails=0;
        while(heads!=11&&tails!=11){
         toss = Math.floor(Math.random() * 10) % 2;
        switch (toss) {
            case HEAD:
                heads++;
                if(heads==11){
                    console.log("Heads won");
                }
                break;
            case TAIL:
                tails++;
                if(tails==11){
                    console.log("tails won");
                }
                break;
            default:
                break;
        }
    }
}
    toss();
}

