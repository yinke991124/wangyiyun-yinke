let baseUrl = "http://localhost:8080/project/wangyi";
define(['jquery', 'md5'], function($, md5) {
    return {
        regEv: function(selector) {
            console.log($.md5($('#password').val()));
            $(selector).on('click', function() {
                $.ajax({
                    url: `${baseUrl}/lib/reg.php`,
                    type: 'post',
                    data: {
                        // tel:$
                        username: $('#username').val(),
                        password: $.md5($('#password').val()),
                        phone: $('#phone').val()
                    },
                    success: function(res) {
                        alert(res);
                    }
                })
            });
        }
    }
})