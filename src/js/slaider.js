$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        slidesToShow: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 960,
                settings: {
                    dots: false,
                    arrows: true,
                }
            },
            {
                breakpoint: 720,
                settings: {
                    dots: false,
                    arrows: false,
                },
            }
        ],
    });
    // Smooth scroll and pageup

    $(window).scroll(function() {
        if ($(this).scrollTop() > 980) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    $("a[href=#up]").click(function(){
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});
