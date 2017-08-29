console.log('Loaded!');

 //change the text of me div
 //var element = document.getElementById("me") ;
 //element.innerHTML="I changed my content to test js";
 
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
 
  var button=document.getElementById('counter');
 button.onclick = function(){
     var request=new XMLHttpRequest();
     request.onreadystatechange = function(){
         if(request.readystate===XMLHttpRequest.Done){
             if(request.status===200){
                 var counter=request.responseText;
                 var span=document.getElementById('count');
                 span.innerHTML =counter.toString() ;
             }
         }
     };
     request.open('GET','http://http://anwarbadurudeen786.imad.hasura-app.io/counter',true);
     request.send(null);
 };