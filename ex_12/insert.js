$( document ).ready(function() {
   
       let p1 = $(`<p>Wow, I precede the image !</p>`);
       let p2 = $(`<p>Hey, I come in last !</p>`);
       let image = document.querySelector('img');
       $(p1).insertBefore(image);
         $(p2).insertAfter(image);
    
 });