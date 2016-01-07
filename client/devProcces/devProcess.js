Template.main.onRendered(function () {
    $( "#line2").hide();
    $( "#line3").hide();
    $( "#line4").hide();
    var destination = $('.devProcess').offset().top - 400;
    var flag = true;
    $(window).scroll(function () {
        var nowhight = $(this).scrollTop();

        if(destination < nowhight){
            if(flag === true){
                $( "#dev" ).addClass('transformBlock');
                $( "#line1" ).addClass('movingLine');
                setTimeout(function () {
                    $( "#dev1" ).addClass('transformBlock');
                    $( "#line2").show(20, function () {
                        $( "#line2" ).addClass('movingLine');
                    });
                    setTimeout(function () {
                        $("#dev2").addClass('transformBlock');
                        $("#line3").show(20, function () {
                            $("#line3").addClass('movingLine');
                        });
                        setTimeout(function () {
                            $("#dev3").addClass('transformBlock');
                            $("#line4").show(20, function () {
                                $("#line4").addClass('movingLine');
                            });
                            setTimeout(function () {
                                $("#dev4").addClass('transformBlock');
                            },1000);
                        },1000);
                    },1000);
                }, 1000);
            flag = false;
            }
        }
    });
});