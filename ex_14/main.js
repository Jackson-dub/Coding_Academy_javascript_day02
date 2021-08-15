$( document ).ready(function() {
   
    let paragraphs = $( "p" );

    paragraphs.each(function(paragraph){

        $(this).mouseover(function() {
     
            $( this ).addClass('blue');

          });
        
        $(this).click(function(){
           
            $(this).toggleClass('highlighted');
            
        })
    })
    
 
});