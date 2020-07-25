console.log("user name with clock");

const name=prompt('enter your name:','Anonymous');
title.innerText  = `   Welcome to JS  ${name} `;


//darkmode
const dmode = document.getElementById('dark');
dmode.onclick= function changeColor(){
setTimeout(()=>{
    document.body.style.backgroundColor='black';
    document.body.style.color='white';
    document.body.style.fontFamily='arial';
});
}


//clock
const ctime=document.getElementById('time');

function clock(){
    let date=new Date();
    let time=date.toLocaleTimeString();
    ctime.innerText=time;
}

setInterval(clock,3000);
