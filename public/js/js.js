$(function () {
    var nav = $('.navbar').height() + 100;
    var mast = $('.masthead').height() + 70;

    function navbarFixed() {
        if ($('header').length) {
            $(window).scroll(function () { 
                var scroll = $(window).scrollTop();
                // console.log(scroll);
                if (scroll >= nav) {
                    $('.navbar').addClass('nav_fixed');
                    $('.masthead').addClass('mt-10');
                } else {
                    $('.navbar').removeClass('nav_fixed');
                    $('.masthead').removeClass('mt-10');
                }
            });
        }
    }

    navbarFixed();

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
});