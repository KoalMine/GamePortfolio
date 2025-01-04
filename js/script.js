$(document).ready(function () {

    // function of the back to top button

    if ($(window).scrollTop() > 500) {
        $('.back-to-top').show();
    }

    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $('.back-to-top').show();
        } else {
            $('.back-to-top').hide();
        }
    });

    $('.back-to-top').click(function () {
        $('html').animate({ scrollTop: 0 }, 'slow');
    });

    $('.back-to-top').hover(function () {
        $('.upper').animate({ "top": "-38%" }, 'fast');
        $('.lower').animate({ "top": "31%" }, 'fast');
    }, function () {
        $('.upper').animate({ "top": "31%" }, 'fast');
        $('.lower').animate({ "top": "100%" }, 'fast');
    });

    // owl carousel

    $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        margin: 10,
        merge: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    let owl = $('.owl-carousel');
    // Go to the next item
    $('.owl-next').click(function () {
        owl.trigger('next.owl.carousel');
    });

    // Go to the previous item
    $('.owl-prev').click(function () {
        owl.trigger('prev.owl.carousel');
    });

    // navbar underline

    $('.nav-link').each(function () {
        $(this).click(function () {
            let section = $(this).text();
            $('section').each(function () {
                let sId = $(this).attr('id');
                if (sId.toLowerCase() == section.toLowerCase()) {
                    window.scrollTo(0, $(this).offset().top + 1);
                }
            });
        });
    });

    let $el,
        leftPos,
        newWidth,
        $mainNav = $(".navbar-nav");

    $mainNav.append("<li id='magic-line'></li>");
    let $magicLine = $("#magic-line");

    $magicLine
        .width($(".active").width())
        .css("left", $(".active a").position().left)
        .data("origLeft", $magicLine.position().left)
        .data("origWidth", $magicLine.width());



    $(document).scroll(function () {
        let st = $(this).scrollTop();

        $('section').each(function () {
            if (st >= $(this).offset().top && st <= $(this).offset().top + $(this).height()) {
                let id = $(this).attr('id');
                $('a[value="#' + id + '"]').parent().addClass('active');
            } else {
                let id = $(this).attr('id');
                $('a[value="#' + id + '"]').parent().removeClass('active');
            }
        });

        let navItem = document.querySelector('.navbar-nav .active')
        if (navItem == null) {
            let id = $('#contact').attr('id');
            $('a[value="#' + id + '"]').parent().addClass('active');
        }

    });

    $(document).scroll(function () {
        $('.nav-link').each(function () {
            if ($(this).parent().hasClass('active')) {
                $el = $(this);
                leftPos = $el.position().left;
                newWidth = $el.parent().width();
                $magicLine.stop().animate({
                    left: leftPos,
                    width: newWidth
                }, 'fast');
            }
        });
    });

    let st = $(this).scrollTop();

    $('section').each(function () {
        if (st >= $(this).offset().top && st <= $(this).offset().top + $(this).height()) {
            let id = $(this).attr('id');
            $('a[value="#' + id + '"]').parent().addClass('active');
        } else {
            let id = $(this).attr('id');
            $('a[value="#' + id + '"]').parent().removeClass('active');
        }
    });

    let navItem = document.querySelector('.navbar-nav .active')
    if (navItem == null) {
        let id = $('#contact').attr('id');
        $('a[value="#' + id + '"]').parent().addClass('active');
    }

    $('.nav-link').each(function () {
        if ($(this).parent().hasClass('active')) {
            $el = $(this);
            leftPos = $el.position().left;
            newWidth = $el.parent().width();
            $magicLine.stop().animate({
                left: leftPos,
                width: newWidth
            }, 'fast');
        }
    });


    // animations

    var tl = gsap.timeline();
    tl.from(".letter", { duration: 1, opacity: 0, y: "random(-200, 200)", stagger: 0.15 });
    tl.to(".letter", { duration: 1, rotation: 360, stagger: 0.15 }, "-=3.5");

    $(".letter").bind("webkitAnimationEnd mozAnimationEnd animationend", function () {
        $(this).removeClass("rubberBand");
    });

    $(".letter").hover(function () {
        $(this).addClass("rubberBand");
    });


    if (!window.matchMedia("(max-width: 1500px)").matches) {
        gsap.from(".sal", {
            scrollTrigger: {
                trigger: ".sal",
                start: "top bottom"
            },
            opacity: 0,
            x: -200,
            duration: 1,
            ease: "power3",
            stagger: 0.25
        });

        gsap.from(".sar", {
            scrollTrigger: {
                trigger: ".sar",
                start: "top bottom"
            },
            opacity: 0,
            x: 200,
            duration: 1,
            ease: "power3",
            stagger: 0.25
        });
    }

    gsap.from(".skill-box", {
        scrollTrigger: {
            trigger: ".skill-box",
            start: "top bottom"
        },
        opacity: 0,
        y: 200,
        duration: 1,
        ease: "power3",
        stagger: 0.25
    });


});
