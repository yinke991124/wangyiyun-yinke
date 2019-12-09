let baseUrl = "http://localhost:8080/wangyiyun-yinke";
define(['jquery', 'md5', 'cookie'], function($, md5, cookie) {
    return {

        toplogin: function() {
            $('.login-btn-top').on('click', function() {
                // 手机号登录按钮
                $('.telloginout').show();
            })
        },

        loginBtn: function() {

            $('.loginbtn').on('click', function() {

                if ($("#agree").prop("checked")) {
                    // 手机号登录按钮
                    $('.telloginout').show();
                    // 禁止页面滚动
                    $('html,body').addClass('ovfHiden');
                    // 手机号登录按钮点击事件执行后弹出框中的关闭按钮刷新
                    $('.tellogin>p>span:eq(1)').on('click', function() {
                        $('.tellogin').hide();
                        location.reload();
                    });
                    // 手机号登录的其它方式登录
                    $('.bottom>a:eq(0)').on('click', function() {
                        $('.tellogin').hide();
                        location.reload();
                    });

                } else alert("请先同意");
            });


        },

        login: function(fn) {
            $('#sub').on('click', function() {
                $.ajax({
                    type: "post",
                    url: `${baseUrl}/lib/login.php`,
                    data: {
                        phone: $("#phone").val(),
                        pass: $.md5($("#password").val())
                    },
                    dataType: "json",
                    success: function(res) {
                        if (res.msg == 1) {
                            alert('登录成功');
                            fn && fn($("#phone").val(), $.md5($("#password").val()));
                            location.href = `${baseUrl}/src/html/wangyiyun.html`;

                        } else {
                            alert('该账号还未绑定,前往注册');
                            $('.telloginout').hide();
                            $('.reg').show();
                        }
                    }
                })
            })
        },

        regBtn: function() {

            $('.regbtn').on('click', function() {
                if ($("#agree").prop("checked")) {
                    // 手机号登录按钮
                    $('.reg').show();
                    // 禁止页面滚动
                    $('html,body').addClass('ovfHiden');
                } else alert("请先同意")
            });

            // 注册关闭按钮
            $('.del').on('click', function() {
                $('.reg').hide();
                location.reload();
            });
            // 返回登录
            $('.bottom>a').on('click', function() {
                $('.reg').hide();

            });
        },

        reg: function() {
            $('#next').on('click', function() {
                $.ajax({
                    type: "post",
                    url: `${baseUrl}/lib/reg.php`,
                    data: {
                        telnum: $("#telnum").val(),
                        password: $.md5($("#password1").val())
                    },
                    dataType: "json",
                    success: function(res) {
                        if (res.msg == 1) {
                            $('.reg').hide();
                            $('.telloginout').show();
                        } else {
                            alert('该账号已绑定,前往登录');
                            $('.reg').hide();
                            $('.telloginout').show();
                        }
                    }
                })
            })
        },


        setCookie: function(phone, pass) {
            cookie.set("user", JSON.stringify({ phone: phone, pass: pass }));
        }


    }
})