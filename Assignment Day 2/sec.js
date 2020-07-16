console.log("Methods of String & Array");

//method of string

let text = "This is the Second Assignment of JavaScript";
console.log(text);

//search() - this searches the speccified value and return  first occurance of specified  position of match
console.log(text.search('i'));

//slice - extracts a part of a string & return the extracted part in a new string
var fruits= "Apple,Banana,Mango,Grapes,Watermellon";
console.log(fruits);
console.log(fruits.slice(4,12));
console.log(fruits.slice(-12,-5)); // this slice out from -12 to -5 , it count from the end of the string

//substring- this will slice out rest of string it cannot accept negative index
console.log(fruits.substr(7));

//replace-this will replace the given word with another value in a string
console.log(fruits.replace('Mango','Cherry'));

// array method
let arr=["deepa","kavya","sree"];
let arr2=["are studying MSC"];
//splice - removes the elements without having holes in array 
console.log(arr.splice(0,1));

//join -joins all the object and elemnts in string
console.log(arr);
console.log(arr.join('*'));

