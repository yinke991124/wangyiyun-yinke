let baseUrl = "http://localhost:8080/wangyiyun-yinke";
define(['jquery', 'cookie'], function($, cookie) {
    return {



        xuanran: function(callback) {

            let id = location.search.split('=')[1];
            $.ajax({
                url: `${baseUrl}/lib/getitem.php`,
                type: 'get',
                data: {
                    id: id
                },
                dataType: 'json',
                success: function(res) {
                    let pic = JSON.parse(res.pic);
                    let productpic = JSON.parse(res.productpic);
                    // console.log(productpic, pic);
                    productpic.forEach((value, index) => {
                        // console.log(value, index)
                        // 大图渲染
                        var tempstr_bigimg = `
                        <li class="k${index}"><img src="${baseUrl}/src/${value.src}" alt=""></li>
                        `;
                        $('.mainin .bigimgin .big').append(tempstr_bigimg);

                        // 小图渲染
                        var tempstr_smallimg = `
                        <li class="k${index}"><img src="${baseUrl}/src/${value.src}" alt=""></li>
                        `;
                        $('.mainin .smallimgin .small').append(tempstr_smallimg);
                    });



                    let tempstr_header = `
                        <a href="./wangyiyun.html">首页</a>
                        <span>>${res.title}</span>
                        <a href="javascript:;">分享</a>
                        `;

                    let tempstr_right = `
                        <div class="title"><span>${res.title}</span></div>
                        <div class="information">${res.information}</div>
                        <div class="price"> ￥${res.lowerprice} <span>￥${res.price}</span></div>
                        <div class="${res.discountclass}">
                            <span>促销：</span>
                           ${res.discountinner}
                        </div>
                        <div class="${res.styleclass}">
                            <span>款式：</span>
                            ${res.styleinner}
                        </div>
                        <div class="${res.colorclass}">
                            <span>颜色：</span>
                            ${res.colorinner}
                        </div>
                        <div class="${res.normsclass}">
                            <span>规格：</span>
                            ${res.normsinner}
                        </div>
                        <div class="${res.materialclss}">
                            <span>材质：</span>
                            ${res.materialinner}
                        </div>
                        <div class="num">
                            <span>数量：</span>
                            <div class="count">
                                <span class="cut">-</span>
                                <input class="num" type="text" value="1" id="number">
                                <span class="add">+</span>
                            </div>
                        </div>
                        <div class="${res.serviceclass}">
                            <span>服务：</span>
                               ${res.serviceinner}
                        </div>
                        <div class="go">
                            <div class="buyim">
                                <a href="">立即购买</a>
                            </div>
                            <div class="addcar">
                                <a href="javascript:;">
                                    <span class="iconfont icongouwuche"></span>
                                    <span>加入购物车</span>
                                </a>
                            </div>
                        </div>
                        `;

                    let tempstr_more = `
                        <span>>${res.title}</span>
                        `;
                    $('.mainin>.title').append(tempstr_header);
                    $('.mainin>.detail>.right').append(tempstr_right);
                    $('.morein>.left>.title').append(tempstr_more);

                    let tempstr_des = `
                    <div class="img">
                        <img src="${baseUrl}/src/${pic[0].src}" alt="">
                    </div>
                    <div class="description">
                        <p>${res.title}</p>
                        <p>￥<em>${res.lowerprice}</em></p>
                    </div>
                    <div class="btn">
                        <div class="buyim">
                             <a href="">立即购买</a>
                        </div>
                        <div class="addcar">
                            <a href="javascript:;">
                                <span class="iconfont icongouwuche"></span>
                                <span class="addcar">加入购物车</span>
                            </a>
                        </div>
                    </div>
                    `;
                    $('.addcarin').append(tempstr_des);
                    callback && callback(res.id, res.lowerprice);
                }
            })
        },


        BtnChange: function() {
            $('.bigimgout').hover()


            var num = 0;
            $('.smallimgin .small>li').eq(0).addClass('active');
            var smallimg = $('.smallimgin .small>li');
            $('.rightbtn').on('click', function() {
                if (smallimg.length > num) {
                    num++;
                    $('.bigimgin').css('left', -(num) * 440);
                    if (num === smallimg.length) {
                        num = 0;
                        $('.bigimgin').css('left', -(num) * 440);
                    };
                }
                smallimg.eq(num).addClass('active').siblings().removeClass("active");

            });
            $('.leftbtn').on('click', function() {
                if (smallimg.length > 1) {
                    num--;
                    $('.bigimgin').css('left', -num * 440);
                    if (num === -1) {
                        num = smallimg.length - 1
                        $('.bigimgin').css('left', -num * 440);
                    };
                }
                smallimg.eq(num).addClass('active').siblings().removeClass("active");

            })


            $('.smallimgin .small>li').on('click', function() {
                num = this.className.slice(1);
                $('.bigimgin').css('left', -num * 440);
                $(this).addClass('active');
                $(this).siblings().removeClass('active');


            })


        },



        cutProductsCount: function() {

            const numinput = $('#number');
            let value = Number($("#number").val());
            if (value === 1) return;
            else numinput.val(value -= 1);
        },




        addProductsCount: function() {
            const numinput = $('#number');
            let value = Number($("#number").val());
            numinput.val(value += 1);
        },





        addItem: function(id, lowerprice, num) {


            let shop = cookie.get('shop'); // 获取cookie数据 判断是否存在
            let product = {
                id: id,
                lowerprice: lowerprice,
                num: num

            };

            if (shop) {
                shop = JSON.parse(shop);
                if (shop.some(elm => elm.id == id)) {
                    shop.forEach(elm => {
                        elm.id == id ? elm.num = num : null;
                    });
                } else {
                    shop.push(product);
                }
            } else {
                shop = []; // 购物车没有内容 新建一个购物车
                shop.push(product); //将商品放入购物车
            }
            cookie.set('shop', JSON.stringify(shop), 1);

        }

    }

});