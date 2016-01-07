$( document ).ready(function() {
	$( '.page-footer img' ).hover(
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