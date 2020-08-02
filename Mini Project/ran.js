// console.log("Fetch API");
// //to get random quotes
let gen_btn=document.querySelector(".gen_btn");
gen_btn.addEventListener('click',fetchQuotes);

 async function fetchQuotes(){
 const response=await fetch('https://type.fit/api/quotes').then(Response=>Response.json()).then (data =>{
        let index=Math.floor(Math.random()*data.length);
        console.log(data);
    })
}
fetchQuotes();