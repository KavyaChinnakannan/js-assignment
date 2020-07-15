/*var can be redeclared and updted ,let cannot be redeclared */
var name="kavya";
var city="chennai";
{
    let name="riya"; 
    console.log('using let:',name);
}
console.log(name);
console.log(city);

//const is similar to let when it comes to block scoop
const fruits = ["mango","apple"]
console.log(fruits);
fruits.push("banana");
console.log(fruits)