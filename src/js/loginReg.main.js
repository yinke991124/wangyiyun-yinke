requirejs.config({
    paths: {
        jquery: "../../node_modules/jquery/dist/jquery.min",
        loginReg: "./lib/loginReg",
        md5: "./jquery.md5",
        cookie: "./lib/cookie"
    },
    shim: {
        md5: ['jquery']
    }
});

require(['jquery', 'loginReg', 'md5', 'cookie'], function($, login, md5) {
    login.toplogin();
    login.loginBtn();
    login.login(function(phone, pass) {
        login.setCookie(phone, pass)
    });
    login.regBtn();
    login.reg();
});