UI.registerHelper('en', function (){
	if(Session.get('en') === true){
		return true;
	}	
});
UI.registerHelper('ru', function (){
	if(Session.get('ru') === true){
		return true;
	}
	
});