Template.modal1.events({
    'click #modalButton': function (e) {
        console.log('asd');
        var destination = $('.' + 'contact').offset().top;
        var minus = destination - 60;
        $("body,html").animate({scrollTop: minus }, 800);
    }
});


/*Template.main.created = function () {
	Meteor.call('addVisitor',userVisitor, function (err, res) {
            if(err){
                aler(err + 'lelekapodibno');
            }
        });
}*/