var hitungAwal = 0;
$(window).scroll(function() {
    var nTop = $('.count').offset().top - window.innerHeight;
    if (hitungAwal == 0 && $(window).scrollTop() > nTop) {
        $('.count').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 6000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }); hitungAwal = 1;}
});