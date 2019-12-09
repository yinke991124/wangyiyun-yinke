// let baseUrl = "http://localhost:8080/wangyiyun-yinke";

//商品详情页中弹出框的效果
define(['jquery'], function($) {
    return {
        slider: function() {
            $(window).on('scroll', function() { //窗口滚动事
                var top = $(document).scrollTop(); //获得窗口滚动（即滚动条的滚动）距离窗口顶部的大小
                top > 1000 ? $('.addcarout').each(function(i, elm) { $('.addcarout').show() }) : $('.addcarout').each(function(i, elm) { $('.addcarout').hide() });
            });
        }
    }
});