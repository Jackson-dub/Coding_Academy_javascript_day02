$( document ).ready(function() {
   
   let paragraphs = document.querySelectorAll('p');
   console.log(paragraphs);

   $(paragraphs).each(function(paragraph){

        $(this).css("display","none");

    });
});