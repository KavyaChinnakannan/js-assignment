console.log("Check the given number is Even or Odd");

//even or odd
 let num = prompt("Enter a number:");
 function is_even_odd (x){
    
    if (x%2==0){
       
        console.log(`The Number entered  is ${x} and Number is Even`);
    
    }
    else{
        console.log(`The Number entered  is ${x} and Number is Odd`); 
    }
 }
 is_even_odd(num)


