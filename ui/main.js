console.log('Loaded!');

 //change the text of me div
 var element = document.getElementById("me") ;
 element.innerHTML="I changed my content to test js";
 
 //to move image on click
 var img=document.getElementById('mad');
 img.dbclick=function() {
  img.style.marginLeft='100px';   
 };//for image give the id command in img tag not in div
 
 