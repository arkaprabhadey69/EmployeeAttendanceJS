
//ArrayPractice Problem 1&2
{
    function getRandom() {
        let upperBound = 999;
        let lowerBound = 100;
        let number = lowerBound + Math.floor((Math.random() * ((upperBound - lowerBound) + 1)));
        return number;
    }
    function max(a, b) {
        return (a > b) ? a : b;
    }
    function min(a, b) {
        return (a > b) ? b : a;
    }
    var num = [];
    for (let i = 0; i < 10; i++) {
        num.push(getRandom());
    }
    function printArray(sliced) {
        for (var i = 0; i < sliced.length; i++) {
            console.log(sliced[i]);
        }
    }
    printArray(num);
    //Find second largest element
    let largest = 0;
    let second = 0;
    console.log("Second largest element without sorting")
    for (let i = 0; i < 10; i++) {
        largest = max(largest, num[i]);
    }
    for (let i = 0; i < 10; i++) {
        if (num[i] != largest)
            second = max(second, num[i]);
    }
    console.log(second);
     //Find second smallest element
    let smallest = 10000;
    let secondSmall = 10000;
    console.log("Second smallest element without sorting")
    for (let i = 0; i < 10; i++) {
        smallest = min(smallest, num[i]);
    }
    for (let i = 0; i < 10; i++) {
        if (num[i] != smallest)
            secondSmall = min(secondSmall, num[i]);
    }
    console.log(secondSmall);
    //Using sorting
    num.sort(function (a, b) { return a - b });
    console.log("Using sorting, second largest element is: " + num[num.length - 2] + " and second smallest element is: " + num[1]);
}
//Array Practice problem 3, getting prime factors
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
console.log(primeFactors(number))
}
//Array Practice Problem RepeatingDigits
{
    var repeatDigits = [];
    function getRepeatingDigitNumbers(range){
        for(let i=0;i<range;i++){
            if(i%11==0&&i!=0){
                repeatDigits.push(i);
            }
        }
    }
    function printArray(sliced) {
        for (var i = 0; i < sliced.length; i++) {
            console.log(sliced[i]);
        }
    }
    getRepeatingDigitNumbers(100);
    printArray(repeatDigits);
}
//Array Practice Problem Sum of Three Numbers=0
{
function findTriplets(arr,n) 
{ 
    var found = false; 
    arr.sort(function (a, b) { return a - b });
  
    for (let i=0; i<n-1; i++) 
    { 
        let l = i + 1; 
        let r = n - 1; 
        let x = arr[i]; 
        while (l < r) 
        { 
            if (x + arr[l] + arr[r] == 0) { 
                    
                console.log(x + " "); 
                    console.log(arr[l]+ " "); 
                    console.log(arr[r]+ " "); 
                    console.log("---------------")
      
                l++; 
                r--; 
                found = true; 
            } 
            else if (x + arr[l] + arr[r] < 0) 
                l++; 

            else
                r--; 
        } 
    } 
  
    if (found == false) 
            console.log("No triplets");
} 
arr=[1,2,-1,0,-2];
let n=arr.length;
findTriplets(arr,n);

}