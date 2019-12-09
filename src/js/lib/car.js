let baseUrl = "http://localhost:8080/wangyiyun-yinke";
define(['jquery', 'cookie'], function($, cookie) {
    return {


        xuanran: function(callback) {
            let shop = cookie.get('shop');
            if (shop) {
                shop = JSON.parse(shop);
                let idList = shop.map(elm => elm.id).join(); //取id并且用,连接
                $.ajax({
                    url: `${baseUrl}/lib/shop.php`,
                    type: 'get',
                    data: {
                        idlist: idList
                    },
                    dataType: 'json',
                    success: function(res) {
                        let tempstr = '';
                        res.forEach(elm => {
                            let pic = JSON.parse(elm.pic);
                            let arr = shop.filter((val, i) => {
                                return val.id == elm.id;
                            });
                            tempstr += `
                            <li class="item" kid=${elm.id}>
                                <div class="inp"><input type="checkbox" name="" id="" class="choice"></div>
                                <div class="right">
                                    <img src="${baseUrl}/src/${pic[0].src}" alt="">
                                    <div class="des">
                                        <a href="">${elm.title}</a>
                                        <p>材质等 选项待处理</p>
                                    </div>
                                    <div class="sinPr">￥<em>${elm.lowerprice}</em> </div>
                                    <div class="count">
                                        <input class="num" type="text" disabled="disabled" value="${arr[0].num}">
                                    </div>
                                    <div class="sumPr">￥<em>${(elm.lowerprice * arr[0].num).toFixed(2)}</em> </div>
                                    <div class="del">&times;</div class="del">
                                </div>
                        </li>
                            `;
                        });

                        // console.log($('.des'))
                        $('.others>.center').append(tempstr);
                        $('.item').insertBefore(".last");
                        $('.count1').html($('.item').length);



                        var sum = 0;
                        let tempstrcount = '';
                        $('.choice').on('click', function(callback) {
                            let item = $(this).parent().next();
                            let price = item.children().eq(4).children().html();
                            sum += Number(price);
                            $('#sumprice').html(`合计：${sum}`);
                        });




                        callback && callback(shop);

                    }
                });
            }

        },


        selectAll: function() {
            $("#selectall").on('click', function() {
                var flag = $('#selectall').prop('checked');
                if (flag) {
                    $('.choice').prop("checked", true);
                } else {
                    $('.choice').prop("checked", false);
                }
            })
        },

        // sum: function(choice, lag) {
        //     let tempstrcount = '';
        //     if (flag) {
        //         let item = choice.parent().next();
        //         console.log(item)
        //         let pricce = item.children().eq(4).children().html();

        //         console.log($('.bottom .des'));
        //     }
        // },


        // 购物车删除
        delete: function(id) {

            let shop = cookie.get('shop');
            let product = {
                id: id
            };

            if (shop) {
                shop = JSON.parse(shop);
                if (shop.some(product => product.id == id)) {
                    shop.pop(product);

                    location.reload();
                }
                cookie.set('shop', JSON.stringify(shop), 1);
            }


        }
    }
})