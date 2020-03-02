var doc = jQuery(document);

doc.ready(function(){
    "use strict";

    var typed = new Typed('.mytext', {
        strings: ['Web Developer', 'Web Designer'],
        smartBackspace: true, // Default value
        loop: true,
        backDelay: 1500,
        typeSpeed: 10
    });
});

