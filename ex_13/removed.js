$( document ).ready(function() {
   
    let tests = document.querySelectorAll('.test');
    let platypus = document.querySelectorAll('.platypus');
   
 
    function remove(tests,platypus){

        let elements = [];

        $(tests).each(function(test){
 
            elements.push(this);
    
        });

        $(platypus).each(function(elm){
 
            elements.push(this);
    
        });

        $(elements).each(function(element){
 
            $(this).remove();
    
        });


    }

    remove(tests,platypus);
   
 });