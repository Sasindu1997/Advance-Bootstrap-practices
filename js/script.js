$(document).ready(function () {

    // $('header nav.navbar ul.nav li.dropdown').hover(function () {

    //     $('.dropdown-menu', this).fadeIn('fast');


    // }, function () {

    //     $('.dropdown-menu', this).fadeOut('fast');

    // });
    $('.dropdown').mouseenter(function(){
        if(!$('.dropdown-menu').is(':visible')) { // disable for mobile view
            if(!$(this).hasClass('open')) { // Keeps it open when hover it again
                $('.dropdown-menu', this).trigger('click');
            }
        }
    });
});
