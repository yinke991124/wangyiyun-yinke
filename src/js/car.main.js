requirejs.config({
    paths: {
        jquery: "../../node_modules/jquery/dist/jquery.min",
        cookie: "./lib/cookie",
        car: "./lib/car"
    },
    shim: {}
});

require(['jquery', 'cookie', 'car'], function($, cookie, car) {
    car.xuanran(function(shop) {
        $('.del').on('click', function(shop) {
            var id = $(this).parent().parent().attr("kid");
            car.delete(id);
            $(this).parent().parent().remove();
        });

        car.delete(shop);

        // $('.choice').on('click', function(shop) {
        //     var choice = $(this);
        //     var flag = $(this).prop('checked');
        //     car.sum(choice, flag);
        // })


    });
    car.selectAll();
    // car.buy();
})