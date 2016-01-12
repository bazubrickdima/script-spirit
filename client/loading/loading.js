Template.loading.rendered = function () {
	var message = '<p class="loading-message">Loading Message</p>';
var spinner = '<div class="sk-fading-circle"><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div>';
  if ( ! Session.get('loadingSplash') ) {
    this.loading = window.pleaseWait({
      logo: 'mainLogo.png',
      backgroundColor: '#414141',
      loadingHtml: '<p class="loading-message">SCRIPT SPIRIT</p>' + spinner /*+ '<div class="sk-spinner sk-spinner-rotating-plane"></div>'*/
    });
    Session.set('loadingSplash', true); // just show loading splash once
  }
};

Template.loading.destroyed = function () {
  if ( this.loading ) {
    this.loading.finish();
  }
};