var baslik=document.createElement("h2");
var node=document.createTextNode("merhaba javascript");
baslik.appendChild(node);
var div1=document.getElementById("div1");
var p2=document.getElementById("p2");
div1.insertBefore(baslik,p2);
alert("p2 deleted");
div1.removeChild(p2);
alert("değiştiriliyor")
var p1=document.getElementById("p1");
div1.replaceChild(baslik,p1);