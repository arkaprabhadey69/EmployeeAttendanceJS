function isPrime(value){
    flag=true;
    for(let i=2;i<value-1;value++){
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