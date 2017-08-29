console.log('Loaded!');

 //change the text of me div
 var element = document.getElementById("me") ;
 element.innerHTML="I changed my content to test js";
 
 //to move image on click
 var img=document.getElementById('ma');
 var marginLeft=0;
 function moveRight(){
     marginLeft=marginLeft + 1;
     img.style.marginLeft=marginLeft + 'px';
 }
 img.ondblclick=function() {
 var interval=setInterval(moveRight,50); 
 };//for image give the id command in img tag not in div
 
 