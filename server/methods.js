Meteor.startup(function () {
    process.env.MAIL_URL = 'smtp://postmaster%40sandboxfe4e63216a764ccab0a852a35d014554.mailgun.org:409e153296eacf781b73df952d87e3ba@smtp.mailgun.org:587';

  });






Meteor.methods({
  sendEmail: function (email, name, text) {
    check([email, name, text], [String]);

    this.unblock();

    Email.send({
      to: 'script.spirits@gmail.com',
      from: email,
      subject: 'Hi my name is ' + name + ' my email: ' + email,
      text: text
    });
    return 1;
  },
  addVisitor: function(user){
    var date = new Date();
    var options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };/*date.toLocaleString("en-US", options)*/

     var nowUserId = Visitors.insert({
        ipAddress: user.ipAddress,
        browser: user.userAgent.browser.family,
        os: user.userAgent.os.family,
        date: date.toLocaleString("en-US", options)
/*        city: user.geo.city || ,
        country: user.geo.country,
        ll: ll[0] + ',' + ll[1]*/
      });
  if(user.geo){
     /*    Visitors.insert({
            ipAddress: user.ipAddress,
            browser: user.userAgent.browser.family,
            os: user.userAgent.os.family,
            date: date.toLocaleString("en-US", options),
            city: user.geo.city,
            country: user.geo.country

      });*/
         Visitors.update({
          _id: nowUserId
        },{
          $set: 
          {
            city: user.geo.city,
            country: user.geo.country
          }
        });
  }

    
 /*      console.log(user.userAgent.os.family);
      console.log(user.geo.city);
      console.log(user.geo.country);
      console.log(user.geo.ll);*/
  }
});