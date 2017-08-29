console.log('Loaded!');

 //change the text of me div
 var element = document.getElementById("me") ;
 element.innerHTML="I changed my content to test js";
 
 //to move image on click
 var img=document.getElementById("mad");
 img.onclick=function() {
  img.style.marginleft='100px';   
 };