

//Subscribe
// remap jQuery to jQuery

// your functions go here
jQuery('#email-field').click(function () {
    jQuery(this).addClass("active");
    jQuery(this).attr('placeholder', 'Email Address...');
    jQuery('#subscribe-button').addClass("show");
});

