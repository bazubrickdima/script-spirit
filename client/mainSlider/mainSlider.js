$( document ).ready(function() {
    $( '.MainArrowBlock img' ).hover(
        function() {
            var imgSrc = $(this).attr('src');
            var newImgSrc = 'H' + imgSrc;
            console.log(newImgSrc);
            $( this ).attr('src', newImgSrc);
        },function() {
            var imgSrc = $(this).attr('src');
            var newImgSrc = imgSrc.slice(1);
            $( this ).attr('src', newImgSrc);
        }
    );
});
Template.mainSlider.events({
    'click .MainArrowBlock img': function (e) {
        e.preventDefault();
        var destination = $('.aboutUs').offset().top;
        var minus = destination - 95;
        $("body,html").animate({scrollTop: minus }, 800);

    }
});