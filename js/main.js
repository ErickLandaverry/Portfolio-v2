var doc = jQuery(document);

doc.ready(function(){
    "use strict";

    var typed = new Typed('.mytext', {
        strings: ['Web Developer', 'Web Designer'],
        smartBackspace: true, 
        loop: true,
        backDelay: 1500,
        typeSpeed: 10
    });

    if($(window).scrollTop()<200) {
        $('.navbar-nav').addClass('navbar-nav-bg');
    }

    $(window).scroll(function(){
        var top = $(window).scrollTop();

        if(top>=200) {
            $('header').addClass('overlay');
            $('.navbar-nav').removeClass('navbar-nav-bg');
        }

        else if($('header').hasClass('overlay')) {
            $('header').removeClass('overlay');
        }

        else {
            $('.navbar-nav').addClass('navbar-nav-bg');
        }
    });

    $('.progress-content .skill-progress').each(function(){
        var value = $(this).attr('data-progress');
        $(this).css('width', '' + value +'%');
    });
});

