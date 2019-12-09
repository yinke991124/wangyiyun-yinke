requirejs.config({
    paths: {
        jquery: "../../node_modules/jquery/dist/jquery.min",
        wangyiyun: "./lib/wangyiyun",
        cookie: './lib/cookie'
            // indexBanner: "./lib/indexBanner"
    },
    shim: {}
});

require(['jquery', 'wangyiyun', "cookie"], function($, wyy, cookie) {
    wyy.xuanran();
    wyy.navLeft();
    wyy.touxiang();
    // Banner.banner();
})