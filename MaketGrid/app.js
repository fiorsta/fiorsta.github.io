jQuery(document).ready(function() {
    jQuery('#who_we_are').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 300
    });

    jQuery('#client_slyder').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 300
    });

    jQuery('#service').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 300
    });
    
    jQuery('.service_item').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated pulse',
        offset: 300
    });

    jQuery('#what_we_do').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 300
    });
    jQuery('.what_we_do_aside').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInLeft',
        offset: 300
    });
     jQuery('.what_we_do_items').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInRight',
        offset: 300
    });
    
    jQuery('.what_we_do_news').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 300
    });
    
    jQuery('#contacts').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeIn',
        offset: 300
    });

    jQuery('.contact_us_all').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated slideInUp',
        offset: 300
    });
});