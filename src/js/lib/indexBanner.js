(function() {
    $.fn.extend({
        slider: function(options) {
            // 函数式编程
            var main = null, //主函数
                init = null, //初始化
                start = null, //开始
                stop = null, //结束
                prev = null, //上一张
                next = null, //下一张
                timer = null, //计时器
                elms = {}, // 命名空间  存储元素
                defaults = {
                    speed: 800, // 动画速度
                    delay: 5000 // 延迟
                };

            $.extend(defaults, options); //合并参数


            init = function() {
                // 元素选取
                elms._index = 0; //当前播放的图片索引
                elms.sliderDiv = this.children('ul:eq(0)'); //选取移动的div元素
                // elms.img = this.children('div').children('img'); //获取图片
                elms.oli = this.children('ul:eq(0)').children('li');
                elms.btn = this.children('span'); //选取按钮
                elms.sliderDiv.append(elms.sliderDiv.children('li').first().clone()); // 克隆第一张图片

                elms.dian = this.children('.points').children('li');
                // 事件绑定
                elms.btn.on('click', function() {
                    if (elms.btn.index(this)) {
                        next();
                    } else {
                        prev();
                    }
                });



                //鼠标移入移除
                this.hover(function() {
                    stop();
                }, function() {
                    timer = setInterval(start.bind(null, 1), defaults.delay + defaults.speed);
                });



                //点点事件
                elms.dian.on('click', function() {
                    stop();
                    elms._index = elms.dian.index(this);
                    var lf = '-' + (elms.oli.width() * elms._index);
                    elms.sliderDiv.animate({
                        left: lf + 'px'
                    }, defaults.speed, function() {
                        $(elms.dian[elms._index]).addClass('active').siblings().removeClass('active');
                    })
                });

            }.bind(this);




            start = function(direction) {
                if (direction) {
                    var lf = '-=' + elms.oli.width();
                } else {
                    console.log(elms._index)
                    var lf = '+=' + elms.oli.width();
                    if (!elms._index) {
                        elms.sliderDiv.css('left', '-' + elms.dian.length * elms.oli.width() + 'px');
                        elms._index = elms.dian.length;
                    }
                }

                elms.sliderDiv.animate({
                    left: lf
                }, defaults.speed, function() {
                    if (direction) elms._index++; // 索引+1
                    else elms._index--;

                    if (elms._index === elms.dian.length) { //播放到最后一张
                        elms._index = 0; //修成0
                        elms.sliderDiv.css('left', 0); //定位为0

                    }
                    $(elms.dian[elms._index]).addClass('active').siblings().removeClass('active');
                })
            }.bind(this);


            prev = function() {
                stop();
                start(0);
            }

            next = function() {
                stop();
                start(1);
            }

            stop = function() {
                // elms.sliderDiv.stop(true, true);
                clearInterval(timer);
            }

            main = function() {
                init();
                timer = setInterval(start.bind(null, 1), defaults.delay + defaults.speed);
            }
            main();
        }
    });
})();