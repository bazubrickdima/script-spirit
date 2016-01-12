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
    };
    var nowUserId = Visitors.insert({
        ipAddress: user.ipAddress,
        browser: user.userAgent.browser.family,
        os: user.userAgent.os.family,
        date: date.toLocaleString("en-US", options),
        referer: user.referer || 'undefined'
    });
    if(user.geo){
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

    if( !FullDay.findOne({ipAddress: user.ipAddress}) ){
        FullDay.insert({
            ipAddress: user.ipAddress,
            browser: user.userAgent.browser.family,
            os: user.userAgent.os.family,
            date: date.toLocaleString("en-US", options),
            referer: user.referer || 'undefined'
        });
    }

  }
});
var second = 1000 * 3600;
Meteor.setInterval(function () {
    var now = new Date();
/*    now.setHours(now.getHours() + 2);*/
    var options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      timezone: 'EET',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    var countVisitors = FullDay.find().count();
    FullDay.remove({});
    CountVisits.insert({
            count: countVisitors,
            date: date.toLocaleString("en-US", options)
        });
}, second);


Meteor.publish('visitors',function () {
  return Visitors.find();
  
});