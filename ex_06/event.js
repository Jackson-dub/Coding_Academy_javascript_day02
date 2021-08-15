$(document).ready(function () {

    let button = document.querySelector('button');

    let paragraphs = document.querySelectorAll('p');

    $(button).click(function () {

        $(paragraphs).each(function (paragraph) {

            $(this).css("display", "none");

        });

    });

});