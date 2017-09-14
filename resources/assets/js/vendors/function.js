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
    $(".box-more").slice(0, 4).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".box-more:hidden").slice(0, 4).slideDown();
        if ($(".box-more:hidden").length == 0) {
            $("#loadMore").fadeOut('slow');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1500);
    });
});

$('a[href=#top]').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 600);
    return false;
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.totop a').fadeIn();
    } else {
        $('.totop a').fadeOut();
    }
});


