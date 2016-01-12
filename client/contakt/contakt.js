Template.main.onRendered(function () {
  $( '.contact img' ).hover(
        function() {
            var imgSrc = $(this).attr('src');
            var newImgSrc = 'H' + imgSrc;
            console.log(newImgSrc);
            $( this ).attr('src', newImgSrc);
        },function() {
            var imgSrc = $(this).attr('src');
            var newImgSrc = imgSrc.slice(1);
            $( this ).attr('src', newImgSrc);
        }
    );
      
});
Template.contact.events({ // плавна прокрутка до якоря
    'submit form':function(e) {
        e.preventDefault();
        var name = $(e.target).find('#name').val();
        var email = $(e.target).find('#email').val();
        var text = $(e.target).find('#textarea1').val();
        if(email && name && text){
            Meteor.call('sendEmail',email, name, text, function (err, res) {
                    if(!err){
                        alert('Ваше повідомлення доставлено.Ми з вами звяжемося як зможемо');
                        $("body,html").animate({scrollTop: 1 }, 800);
                    }else{
                        console.log(err);
                    }

                }
            );
        }else{
            alert('Ви не заповнили всі поля')
        }

    }
});

  