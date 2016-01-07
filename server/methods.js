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
  }
});