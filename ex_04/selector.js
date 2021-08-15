$( document ).ready(function() {
   
    //let tests = $("a[target='blank_']");
    let links = $("a");
 
    $(links).each(function(link){

        if(this.target === "blank"){
             $(this).css("opacity","50%");
        }
     });
 });