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
        }
        else{
            console.log("NOt a prime!");
        }

    }
    isPrime(97);
    isPrime(46);
}