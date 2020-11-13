{
    var numArray= new Array(10);
    let i=0;
    for(i=0;i<numArray.length;i++){
        numArray.push(Math.floor(Math.random()*1000));
    }
    for(let j=0;j<numArray.length;j++){
        console.log(numArray[j]);
    }
    
 
  console.log(numArray[0]);
}