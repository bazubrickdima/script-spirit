Router.route('main',{
	path:'/',
	template: 'main',
	onBeforeAction: function () {
   		console.log('asda');
   		var userVisitor = Session.get('currentVisit');
   		 Meteor.call('addVisitor',userVisitor, function (err, res) {
            if(err){
                aler(err + 'lelekapodibno');
            }
        });
   		 this.next();
	}
});
