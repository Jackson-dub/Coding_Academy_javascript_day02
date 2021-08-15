$(document).ready(function () {

    let button = document.querySelector('button');
    let menus = document.querySelectorAll('#menu');
    let count = 0;

    $(button).click(function () {

        if (count === 1) {
            $(menus).each(function (menu) {
                $(this).css('display', 'block');
                count = 0;
            });
        } else if (count === 0) {
            $(menus).each(function (menu) {
                $(this).css('display', 'none');
            });
            count = 1;
        };
    });
});