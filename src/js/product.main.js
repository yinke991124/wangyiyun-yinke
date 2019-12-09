requirejs.config({
    paths: {
        jquery: "../../node_modules/jquery/dist/jquery.min",
        product: "./lib/product",
        cookie: "./lib/cookie",
        productSlider: "./lib/productSlider"
    },
    shim: {}
});

require(['jquery', 'product', 'productSlider'], function($, product, Slider) {
    product.xuanran(function(id, lowerprice) { // 渲染页面
        $('.addcar').on('click', function() {
            product.addItem(id, lowerprice, $('.count>.num').val());
            alert('添加成功');
        });
        $('.cut').on('click', function() {
            product.cutProductsCount();
        });
        $('.add').on('click', function() {
            product.addProductsCount();
        });

        product.BtnChange();

    });

    Slider.slider();
})