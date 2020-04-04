$('.page .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        569: {
            items: 2,
        },

        990: {
            items: 2
        },
        991: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3,
            loop: true
        }
    }
});
$('.member .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        569: {
            items: 1,
        },

        990: {
            items: 1
        },
        1000: {
            items: 1,
            loop: true
        }
    }
});