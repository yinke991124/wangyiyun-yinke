let baseUrl = "http://localhost:8080/wangyiyun-yinke";
define(['jquery', 'cookie'], function($, cookie) {
    return {
        xuanran: function() {
            $.ajax({
                url: `${baseUrl}/lib/getall.php`,
                type: 'get',
                dataType: 'json',
                success: function(res) {
                    // console.log(res); //会得到数据库里的所有内容，是一个json字符串
                    let tempStr = "";
                    res.forEach(elm => {
                        let pic = JSON.parse(elm.pic);
                        tempStr += `
                        <li>
                            <a href="${baseUrl}/src/html/product.html?id=${elm.id}">
                                <img src="${baseUrl}/src/${pic[0].src}" alt="">
                            </a>
                            <div class="bottom">
                                <h3>
                                    <a href="">
                                    <span class="${elm.remark}">${elm.remark_inner}</span>
                                    ${elm.title}</a>
                                </h3>
                                <p>￥${elm.price}</p>
                            </div>
                            <div class="${elm.spanCircle}">
                                <span>￥${elm.lowerprice}</span>
                                <span>￥${elm.price}</span>
                            </div>
                        </li>`;
                    });
                    $('.recommend>ul').append(tempStr);
                    $('.hotProduct>ul').append(tempStr)
                }
            })
        },

        // 左侧导航事件
        navLeft: function() {
            $(window).on('scroll', function() { //窗口滚动事件
                kk();
            });

            function kk() {
                var top = $(document).scrollTop(); //获得窗口滚动（即滚动条的滚动）距离窗口顶部的大小
                top > 500 ? $('#wangyi>.right').show() : $('#wangyi>.right').hide();
            }
            kk();
        },

        banner: function() {

        },

        touxiang: function() {
            if (cookie.get("user")) {
                let user = JSON.parse(cookie.get("user"));
                $.ajax({
                    type: "post",
                    url: `${baseUrl}/lib/login.php`,
                    data: {
                        phone: user.phone,
                        pass: user.pass
                    },
                    dataType: "json",
                    success: function(res) {
                        if (res.msg == 1) {
                            $(".login").addClass("none");
                            $(".succeed").removeClass("none");

                            $(".succeed").hover(() => {
                                $(".menu1").show();
                            }, () => {
                                $(".menu1").hide();
                            })
                        }
                    }
                })
            }
        }


    }
});