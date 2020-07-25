console.log('Multiplication table of 5');

let num=window.prompt('Enter a number:');

function table(){
let h3=document.getElementById('multiply');
for(let i=1;i<11;i++){
    for(let j=1;j<11;j++){
        let number=[`${j} X ${i} =${j*i}`];
        console.log(number).number.forEach(element => {
            h3.innerHTML = `<li>${element}</li>`;
            
        });
    }
}
} 
table();   
        