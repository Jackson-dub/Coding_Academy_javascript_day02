$(document).ready(function (){

    let button = document.querySelector('button');

    let paragraphs = document.querySelectorAll('p');

    $(button).click(function () {

        $(paragraphs).each(function (paragraph) {

            $(this).addClass('on');

        });

        let Ons = $(".on");
        
        $(Ons).each(function(on){
            
             $(this).mouseover(function(){
                $(this).css("background-color","white");
             });

             $(this).click(function(){
                 $(this).remove();
             })
                     
         })

    });

  

});