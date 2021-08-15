$(document).ready(function () {

    let button = document.querySelector('button');
    let platypus = document.querySelectorAll('.platypus');

    $(button).click(function () {

        $(platypus).each(function(element){

            $(this).css({
                "position":"relative",
                "right" : "-150px",
                "bottom" : "-200px",
                "background-color" : "green"
            })
     
        })
      
    });
});