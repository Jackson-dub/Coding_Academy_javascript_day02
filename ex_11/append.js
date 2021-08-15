$( document ).ready(function() {
   
    let input = document.querySelector('#listItem');
    
    function append(input){

       let div = $(`<div>${input.value}</div>`);
       let body = document.querySelector('body');
       $(body).append(div);
    }

    let button = document.querySelector("button");
   
    $(button).click(function(){
        append(input);
    });
 
 });