Router.configure({
  loadingTemplate: 'loading'
});
Router.route('main',{
  path:'/',
  template: 'main',
  waitOn: function() {
    return Meteor.subscribe('visitors'); 
  },
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
Router.onBeforeAction('loading');
