//home
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:10000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false,
            navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 3px;stroke: #007bff;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 3px;stroke: #007bff;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
        }
    }
});


function parallaxIt() {

    // create variables
    var $fwindow = $(window);
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // on window scroll event
    $fwindow.on('scroll resize', function() {
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    });

    // for each of content parallax element
    // $('[data-type="content"]').each(function (index, e) {
    //     var $contentObj = $(this);
    //     var fgOffset = parseInt($contentObj.offset().top);
    //     var yPos;
    //     var speed = ($contentObj.data('speed') || 1 );
    //
    //     $fwindow.on('scroll resize', function (){
    //         yPos = fgOffset - scrollTop / speed;
    //
    //         $contentObj.css('top', yPos);
    //     });
    // });

    // for each of background parallax element
    // $('[data-type="background"]').each(function(){
    //     var $backgroundObj = $(this);
    //     var bgOffset = parseInt($backgroundObj.offset().top);
    //     var yPos;
    //     var coords;
    //     var speed = ($backgroundObj.data('speed') || 0 );
    //
    //     $fwindow.on('scroll resize', function() {
    //         yPos = - ((scrollTop - bgOffset) / speed);
    //         coords = yPos + 'px';
    //
    //         $backgroundObj.css({ backgroundPosition: coords });
    //     });
    // });

    // triggers winodw scroll for refresh
    $fwindow.trigger('scroll');
};

parallaxIt();



// makes the parallax elements


$(function(){
    var $refreshButton = $('#refresh');
    var $results = $('#css_result');

    function refresh(){
        var css = $('style.cp-pen-styles').text();
        $results.html(css);
    }

    refresh();
    $refreshButton.click(refresh);

    // Select all the contents when clicked
    $results.click(function(){
        $(this).select();
    });
});


/*
	Load more content with jQuery - May 21, 2013
	(c) 2013 @ElmahdiMahmoud
*/

$(function () {
    $(".box-more").slice(0, 1).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".box-more:hidden").slice(0, 1).slideDown();
        if ($(".box-more:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});

$('.totop a.top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 250) {
        $('.totop a').fadeIn();
    } else {
        $('.totop a').fadeOut();
    }
});

