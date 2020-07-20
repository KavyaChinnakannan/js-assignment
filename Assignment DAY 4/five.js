console.log("Reward for employee");
var amnt=0;
var per=0;

amnt=prompt("Enetr a amount:");
if( amnt>0 && amnt<=5000){
    console.log(`The percentage of ${amnt} is 2% `);
}
else if(amnt>5001 && amnt<=10000){
    console.log(`The percentage of ${amnt} is 5% `);
}
else if(amnt>10001 && amnt<=20000){
    console.log(`The percentage of ${amnt} is 7% `);
}
else if(amnt>20000){
    console.log(`The percentage of ${amnt} is 7% `);
}
else{
    console.log("please enter the amount based on criteria..");
}