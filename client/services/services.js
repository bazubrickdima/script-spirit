Template.main.onRendered(function () {
	var destination = $('.servicesMain').offset().top - 600;
	$(window).scroll(function () {
		var flag = $(this).scrollTop();
		if(flag > destination){

			$('.servicesHideLeft').animate({
    			"left":"0"
	    	},1100);
	    	
			$('.servicesHideRight').animate({
	    		"right":"0"
	    	},1100);
		}
		if(flag > 450){
		   $('.servicesHideLeft2').animate({
    			"left":"0"
    		},1100);
		   $('.servicesHideRight2').animate({
    			"right":"0"
    		},1100);
		}
	});
});

Template.services.events({
	'click .modal1': function (e) {
		$('#modal1').openModal();
	}
});
Template.services.events({
	'click .modal2': function (e) {
		$('#modal2').openModal();
	}
});
Template.services.events({
	'click .modal3': function (e) {
		$('#modal3').openModal();
	}
});
Template.services.events({
	'click .modal4': function (e) {
		$('#modal4').openModal();
	}
});


