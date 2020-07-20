console.log("Array");

var shoppingList=['Ghee','Dals & pulses','Sugar','Atta & flour','Salt'];
var shoppingBasket=['Biscuits','Chocolates','Pasta','Pickle'];
console.log(shoppingList);
shoppingBasket.push(...shoppingList)
console.log(shoppingBasket);