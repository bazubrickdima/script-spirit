/*$( document ).ready(function(){
  $(".button-collapse").sideNav();
});
*/
Template.nav.onRendered(function () {
    Session.set('en', true);
    Session.set('ru', false);
});

Template.nav.events({
	'click .brand-logo':function(e){
		e.preventDefault();
		$("body,html").animate({scrollTop: 1 }, 800);
	}
});

Template.nav.events({
	'click li a':function(e){
		e.preventDefault();
		var atribyte = $(e.target).attr("href");
		var destination = $('.' + atribyte).offset().top;
		var minus = destination - 95;
		if(atribyte === 'port'){
			minus -= 40;
		}
		$("body,html").animate({scrollTop: minus }, 800);

	}
});

Template.nav.events({
	'click .ru':function(e){
		e.preventDefault();
		Session.set('en', false);
		Session.set('ru', true);
	}
});
Template.nav.events({
	'click .en':function(e){
		e.preventDefault();
		Session.set('ru', false);
		Session.set('en', true);
	}
});