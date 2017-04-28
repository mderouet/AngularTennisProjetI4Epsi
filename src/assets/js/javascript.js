

jQuery(document).ready(function () {
    jQuery('.matchAVenir').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
    });
    jQuery('.matchAVenir').slick()

})


//Subscribe
// remap jQuery to jQuery

// your functions go here
jQuery('#email-field').click(function () {
    jQuery(this).addClass("active");
    jQuery(this).attr('placeholder', 'Email Address...');
    jQuery('#subscribe-button').addClass("show");
});

