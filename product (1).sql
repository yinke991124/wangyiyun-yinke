-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2019-12-09 12:36:04
-- 服务器版本： 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project`
--

-- --------------------------------------------------------

--
-- 表的结构 `product`
--

CREATE TABLE `product` (
  `id` int(255) NOT NULL COMMENT '商品id',
  `title` varchar(300) DEFAULT NULL COMMENT '商品标题',
  `price` int(200) DEFAULT NULL COMMENT '商品价格',
  `lowerprice` int(200) DEFAULT NULL COMMENT '商品特价',
  `num` int(200) NOT NULL COMMENT '商品库存',
  `pic` text NOT NULL COMMENT '商品图片',
  `productpic` text NOT NULL COMMENT '详情页商品图片',
  `details` varchar(300) DEFAULT NULL COMMENT '商品描述',
  `spanCircle` varchar(300) DEFAULT NULL COMMENT '特价商品的class名称',
  `remark` varchar(200) DEFAULT NULL COMMENT '特价信息的class名称',
  `remark_inner` varchar(200) DEFAULT NULL COMMENT '特价的具体内容',
  `information` varchar(200) NOT NULL COMMENT '商品注意事项',
  `discountclass` varchar(200) NOT NULL COMMENT '商品折扣信息class名称',
  `discountinner` text COMMENT '商品折扣信息',
  `styleclass` varchar(200) NOT NULL COMMENT '商品款式class名',
  `styleinner` text COMMENT '商品款式的具体内容',
  `colorclass` varchar(200) NOT NULL COMMENT '商品颜色class',
  `colorinner` text COMMENT '商品颜色',
  `normsclass` varchar(200) NOT NULL COMMENT '商品规格class',
  `normsinner` text COMMENT '商品规格',
  `materialclss` varchar(200) NOT NULL COMMENT '商品材质class',
  `materialinner` text COMMENT '商品材质',
  `serviceclass` varchar(200) NOT NULL COMMENT '商家提供的服务class名称',
  `serviceinner` text COMMENT '商家提供的服务'
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `product`
--

INSERT INTO `product` (`id`, `title`, `price`, `lowerprice`, `num`, `pic`, `productpic`, `details`, `spanCircle`, `remark`, `remark_inner`, `information`, `discountclass`, `discountinner`, `styleclass`, `styleinner`, `colorclass`, `colorinner`, `normsclass`, `normsinner`, `materialclss`, `materialinner`, `serviceclass`, `serviceinner`) VALUES
(1, '伯朗 E43真无线蓝牙耳机蓝牙5.0超长待机安卓苹果通用双耳通话', 199, 99, 300, '[{"src":"/img/middle2.jpg"},{"src":"/img/middle-s1.jpg"},{"src":"/img/middle-s2.jpg"},{"src":"/img/middle-s3.jpg"},{"src":"/img/middle-s4.jpg"},{"src":"/img/middle-s5.jpg"},{"src":"/img/middle-s6.jpg"},{"src":"/img/middle-s7.jpg"},{"src":"/img/middle-s8.jpg"},{"src":"/img/middle-b1.jpg"},{"src":"/img/middle-b2.jpg"},{"src":"/img/middle-b3.jpg"},{"src":"/img/middle-b4.jpg"},{"src":"/img/middle-b5.jpg"},{"src":"/img/middle-b6.jpg"},{"src":"/img/middle-b7.jpg"},{"src":"/img/middle-b8.jpg"}]', '[{"src":"/img/middle-b1.jpg"},{"src":"/img/middle-b2.jpg"},{"src":"/img/middle-b3.jpg"},{"src":"/img/middle-b4.jpg"},{"src":"/img/middle-b5.jpg"}]', '漫步者（EDIFIER） H230P 入耳式立体声线控耳机', 'price', 'remark', '特价', '【赠送硅胶保护套+登山扣】智能触控；20小时长效续航；自动配对；蓝牙5.0；双耳通话；', 'discount', '<p><span>手慢无</span><span>20元  数码立减， 无门槛</span><a href="">领券</a></p>', 'stylenone', '<ul><li>样式1</li></ul>', 'color', '<ul><li>黑色</li><li>红色</li><li>绿色</li><li>白色</li></ul>', 'normsnone', '<ul><li>规格一</li></ul>', 'materialnone', '<ul><li>材质一</li></ul>', 'service', '<ul><li><a href="">7天无理由退货</a></li><li><a href="">15天退换无忧</a></li><li><a href="">119包邮</a></li><li><a href="">商家发货满</a></li><li><a href="">网易自营</a></li></ul>\r\n\r\n'),
(2, 'kinbor 音乐的力量套装 DTB6550', 138, 39, 233, '[{"src":"/img/middle2.jpg"},{"src":"/img/middle-s1.jpg"},{"src":"/img/middle-s2.jpg"},{"src":"/img/middle-s3.jpg"},{"src":"/img/middle-s4.jpg"},{"src":"/img/middle-s5.jpg"},{"src":"/img/middle-s6.jpg"},{"src":"/img/middle-s7.jpg"},{"src":"/img/middle-s8.jpg"},{"src":"/img/middle-b1.jpg"},{"src":"/img/middle-b2.jpg"},{"src":"/img/middle-b3.jpg"},{"src":"/img/middle-b4.jpg"},{"src":"/img/middle-b5.jpg"},{"src":"/img/middle-b6.jpg"},{"src":"/img/middle-b7.jpg"},{"src":"/img/middle-b8.jpg"}]', '[{"src":"/img/middle-b1.jpg"},{"src":"/img/middle-b2.jpg"},{"src":"/img/middle-b3.jpg"},{"src":"/img/middle-b4.jpg"},{"src":"/img/middle-b5.jpg"}]', 'kinbor 音乐的力量套装 DTB6550', 'price', 'remark', '满减', '【拍前必知】部分地区无法配送，详情请下拉查看详情页', 'discount', '<p><span>限时领取</span><span>包邮券,无门槛</span><a href="">领券</a></p>', 'stylenone', NULL, 'colornone', NULL, 'normsnone', NULL, 'materialnone', NULL, 'service', '<ul><li><a href="">7天无理由退货</a></li><li><a href="">119包邮</a></li><li><a href="">商家发货满</a></li><li><a href="">网易自营</a></li></ul>\r\n'),
(3, '爱国者（aigo）播放器M1无损hifi音乐播放器触屏mp3学生随身听便携播放器', 269, 269, 88, '[{"src":"/img/middle2.jpg"},{"src":"/img/middle-s1.jpg"},{"src":"/img/middle-s2.jpg"},{"src":"/img/middle-s3.jpg"},{"src":"/img/middle-s4.jpg"},{"src":"/img/middle-s5.jpg"},{"src":"/img/middle-s6.jpg"},{"src":"/img/middle-s7.jpg"},{"src":"/img/middle-s8.jpg"},{"src":"/img/middle-b1.jpg"},{"src":"/img/middle-b2.jpg"},{"src":"/img/middle-b3.jpg"},{"src":"/img/middle-b4.jpg"},{"src":"/img/middle-b5.jpg"},{"src":"/img/middle-b6.jpg"},{"src":"/img/middle-b7.jpg"},{"src":"/img/middle-b8.jpg"}]', '[{"src":"/img/middle-b1.jpg"},{"src":"/img/middle-b2.jpg"},{"src":"/img/middle-b3.jpg"},{"src":"/img/middle-b4.jpg"},{"src":"/img/middle-b5.jpg"}]', '爱国者（aigo）播放器M1无损hifi音乐播放器触屏mp3学生随身听便携播放器', 'pricenone', 'remarknone', NULL, '联想音频独立品牌，双曲面触控 双模式连接', 'discountnone', '', 'stylenone', NULL, 'colornone', NULL, 'normsnone', '<ul><li>材质一</li></ul>', 'materialnone', NULL, 'servicenone', NULL),
(4, '漫步者（EDIFIER）W2 真无线 入耳式立体声蓝牙耳机 蓝牙5.0 左右可独立使用', 299, 299, 0, '[{"src":"/img/middle1.jpg"},{"src":"/img/middle-s1.jpg"},{"src":"/img/middle-s2.jpg"},{"src":"/img/middle-s3.jpg"},{"src":"/img/middle-s4.jpg"},{"src":"/img/middle-s5.jpg"},{"src":"/img/middle-s6.jpg"},{"src":"/img/middle-s7.jpg"},{"src":"/img/middle-s8.jpg"},{"src":"/img/middle-b1.jpg"},{"src":"/img/middle-b2.jpg"},{"src":"/img/middle-b3.jpg"},{"src":"/img/middle-b4.jpg"},{"src":"/img/middle-b5.jpg"},{"src":"/img/middle-b6.jpg"},{"src":"/img/middle-b7.jpg"},{"src":"/img/middle-b8.jpg"}]', '[{"src":"/img/middle-b1.jpg"},{"src":"/img/middle-b2.jpg"},{"src":"/img/middle-b3.jpg"},{"src":"/img/middle-b4.jpg"},{"src":"/img/middle-b5.jpg"}]', '漫步者（EDIFIER）W2 真无线 入耳式立体声蓝牙耳机 蓝牙5.0 左右可独立使用', 'pricenone', 'remarknone', NULL, '霍尔磁吸，摒弃繁琐；轻量化设计，佩戴舒适稳固；左右均可以单独使用，聆听更自由', 'discountnone', NULL, 'stylenone', NULL, 'color', '<ul><li>黑色</li><li>红色</li><li>白色</li></ul>', 'normsnone', NULL, 'materialnone', NULL, 'service', '<ul><li><a href="">不支持7天无理由退货</a></li><li><a href="">满119包邮</a></li><li><a href="">商家发货满</a></li><li><a href="">网易自营</a></li></ul>'),
(5, '易系列尤克里里升级款 网易乐器出品 胡桃木/桃花芯二色可选 入门级合 易乐器出品 胡桃木/桃花芯二色可选 入门级合', 518, 399, 0, '[{"src":"/img/middle1.jpg"},{"src":"/img/middle-s1.jpg"},{"src":"/img/middle-s2.jpg"},{"src":"/img/middle-s3.jpg"},{"src":"/img/middle-s4.jpg"},{"src":"/img/middle-s5.jpg"},{"src":"/img/middle-s6.jpg"},{"src":"/img/middle-s7.jpg"},{"src":"/img/middle-s8.jpg"},{"src":"/img/middle-b1.jpg"},{"src":"/img/middle-b2.jpg"},{"src":"/img/middle-b3.jpg"},{"src":"/img/middle-b4.jpg"},{"src":"/img/middle-b5.jpg"},{"src":"/img/middle-b6.jpg"},{"src":"/img/middle-b7.jpg"},{"src":"/img/middle-b8.jpg"}]', '[{"src":"/img/middle-b1.jpg"},{"src":"/img/middle-b2.jpg"},{"src":"/img/middle-b3.jpg"},{"src":"/img/middle-b4.jpg"},{"src":"/img/middle-b5.jpg"}]', '易系列尤克里里升级款 网易乐器出品 胡桃木/桃花芯二色可选 入门级合', 'price', 'remark', '用券减100', '', 'discount', '<p><span>福利社</span><span>100元  23寸尤克里里福利券,无门槛</span><a href="">领券</a></p>', 'style', '<ul><li>桃花芯木-合板-23寸</li><li>胡桃木-合板-23寸</li></ul>', 'colornone', NULL, 'normsnone', NULL, 'materialnone', NULL, 'service', '<ul><li><a href="">7天无理由退货</a></li><li><a href="">15天退换无忧</a></li><li><a href="">119包邮</a></li><li><a href="">商家发货满</a></li><li><a href="">网易自营</a></li></ul>'),
(6, '伯朗 i9S蓝牙5.0真无线耳机双耳通话苹果安卓通用', 169, 89, 0, '[{"src":"/img/middle1.jpg"},{"src":"/img/middle-s1.jpg"},{"src":"/img/middle-s2.jpg"},{"src":"/img/middle-s3.jpg"},{"src":"/img/middle-s4.jpg"},{"src":"/img/middle-s5.jpg"},{"src":"/img/middle-s6.jpg"},{"src":"/img/middle-s7.jpg"},{"src":"/img/middle-s8.jpg"},{"src":"/img/middle-b1.jpg"},{"src":"/img/middle-b2.jpg"},{"src":"/img/middle-b3.jpg"},{"src":"/img/middle-b4.jpg"},{"src":"/img/middle-b5.jpg"},{"src":"/img/middle-b6.jpg"},{"src":"/img/middle-b7.jpg"},{"src":"/img/middle-b8.jpg"}]', '[{"src":"/img/middle-b1.jpg"},{"src":"/img/middle-b2.jpg"},{"src":"/img/middle-b3.jpg"},{"src":"/img/middle-b4.jpg"},{"src":"/img/middle-b5.jpg"}]', '伯朗 i9S蓝牙5.0真无线耳机双耳通话苹果安卓通用', 'price', 'remark', '特价', '【赠送硅胶保护套+登山扣】蓝牙5.0 佩戴舒适 自带充电仓便携 双耳通话', 'discount', '<p><span>手慢无</span><span>20元  数码立减， 无门槛</span><a href="">领券</a></p>', 'stylenone', NULL, 'color', '<ul><li>白色</li></ul>', 'normsnone', NULL, 'materialnone', NULL, 'service', '<ul><li><a href="">7天无理由退货</a></li><li><a href="">15天退换无忧</a></li><li><a href="">119包邮</a></li><li><a href="">商家发货满</a></li><li><a href="">网易自营</a></li></ul>'),
(7, '兰士顿 D4线控重低音炮四核双动圈耳机 苹果安卓通用 带麦', 159, 99, 0, '[{"src":"/img/middle1.jpg"},{"src":"/img/middle-s1.jpg"},{"src":"/img/middle-s2.jpg"},{"src":"/img/middle-s3.jpg"},{"src":"/img/middle-s4.jpg"},{"src":"/img/middle-s5.jpg"},{"src":"/img/middle-s6.jpg"},{"src":"/img/middle-s7.jpg"},{"src":"/img/middle-s8.jpg"},{"src":"/img/middle-b1.jpg"},{"src":"/img/middle-b2.jpg"},{"src":"/img/middle-b3.jpg"},{"src":"/img/middle-b4.jpg"},{"src":"/img/middle-b5.jpg"},{"src":"/img/middle-b6.jpg"},{"src":"/img/middle-b7.jpg"},{"src":"/img/middle-b8.jpg"}]', '[{"src":"/img/middle-b1.jpg"},{"src":"/img/middle-b2.jpg"},{"src":"/img/middle-b3.jpg"},{"src":"/img/middle-b4.jpg"},{"src":"/img/middle-b5.jpg"}]', '兰士顿 D4线控重低音炮四核双动圈耳机 苹果安卓通用 带麦', 'price', 'remark', '特价', '4核驱动 4个喇叭 震撼重低音 纯正音质 苹果安卓通用 线控带麦', 'discount', '<p><span>手慢无</span><span>30元  数码立减， 无门槛</span>< a href="">领券</ a></p>', 'stylenone', NULL, 'color', '<ul><li>黑色</li><li>银色</li><li>玫瑰</li>', 'norms', '<ul><li>升级带麦调音板版</li><li>带麦版</li></ul>', 'materialnone', '', 'service', '<ul><li><a href="">7天无理由退货</a></li><li><a href="">15天退换无忧</a></li><li><a href="">119包邮</a></li><li><a href="">商家发货满</a></li><li><a href="">网易自营\r\n</a></li></ul>'),
(8, '网易云音乐 运动斜挎包', 96, 56, 0, '[{"src":"/img/middle1.jpg"},{"src":"/img/middle-s1.jpg"},{"src":"/img/middle-s2.jpg"},{"src":"/img/middle-s3.jpg"},{"src":"/img/middle-s4.jpg"},{"src":"/img/middle-s5.jpg"},{"src":"/img/middle-s6.jpg"},{"src":"/img/middle-s7.jpg"},{"src":"/img/middle-s8.jpg"},{"src":"/img/middle-b1.jpg"},{"src":"/img/middle-b2.jpg"},{"src":"/img/middle-b3.jpg"},{"src":"/img/middle-b4.jpg"},{"src":"/img/middle-b5.jpg"},{"src":"/img/middle-b6.jpg"},{"src":"/img/middle-b7.jpg"},{"src":"/img/middle-b8.jpg"}]', '[{"src":"/img/middle-b1.jpg"},{"src":"/img/middle-b2.jpg"},{"src":"/img/middle-b3.jpg"},{"src":"/img/middle-b4.jpg"},{"src":"/img/middle-b5.jpg"}]', '网易云音乐 运动斜挎包', 'price', 'remark', '特价', '服饰配件秋冬装热卖，全场满300减80，专区2件8折，限时特价。', 'discount', '<p><span>服饰配件</span><span>包邮券  服饰配件活动券,无门槛</span>< a href="">领券</ a></p>', 'stylenone', NULL, 'color', '<ul><li>黑色</li><li>灰色</li><li>卡其色</li>', 'normsnone', NULL, 'materialnone', NULL, 'service', '<ul><li><a href="">7天无理由退货</a></li><li><a href="">15天退换无忧</a></li><li><a href="">119包邮</a></li><li><a href="">网易自营</a></li></ul>');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `product`
--
ALTER TABLE `product`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT COMMENT '商品id', AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
