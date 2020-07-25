console.log("Background color");

var doc=document.getElementById("bg");
var color=['blue','red','yellow','green','violet'];
var i=0;
function change(){

    doc.style.backgroundColor=color[i];
    i++;
    if(i>color.length-1){
      i=0;
    }
}
setInterval(change,1000);