console.log("ODD numbers");

//getting odd numbers
var inputArray=[];
var size=7;
for(var i=0;i<size;i++){
    inputArray[i]=prompt("enter Element:"+(i+1));
    let oddCube=inputArray.filter(i=>i%2!=0).map(i=>i**3);

}

    
console.log(inputArray);
console.log(oddCube);



