$( document ).ready(function() {
   
    let tests = document.querySelectorAll('.test');
   
 
    $(tests).each(function(test){
 
         $(this).hide();
         alert("The paragraph is now hidden")
 
     });
 });