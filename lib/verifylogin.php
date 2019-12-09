<?php
    header('content-type:text/html;charset=utf-8');
    session_start();//要用session必须先用session_start().//为了方便演示，这里不从数据库读取账号密码
    $defult_user="123456";
    $defule_password="admin";
    $user=$_POST['user'];
    $password=$_POST['password'];//因为有错误超过五次的用户在半个小时内禁止登录，所以要先检测是否有禁止登录
    if(isset($S_ESSION['time'])){//要控制session的有效时间，好像是要修改服务器的配置文件，这里用另一种方法来实现
        if(time()-$_SESSION['time']>1800){
            session_destroy();//销毁
        }
    }
    if(!isset($_SESSION['login'])){
        $_SESSION['login']=true;
    };
 
    if($_SESSION['login']) {
        if ($user == $defult_user && $password == $defule_password) {
            if(isset($_SESSION['in'])&&$_SESSION['in']==true){//$_SESSION['in']用来判断是否已经登录，防止表单重复提交
                die("<script>alert(\"你已经登陆了\");location.assign(\"shop.html\")</script>");
            }else if(isset($_SESSION['flag'])){
                unset($_SESSION['flag']);
                unset($_SESSION['login']);
                $_SESSION['in']=true;
            }
            die("<script>alert(\"登陆成功\");location.assign(\"shop.html\")</script>");
        } else if (!(isset($_SESSION['flag']))) {
            $_SESSION['flag'] = 1;
            die("<script>alert(\"密码错误\");location.assign(\"login.html\")</script>");
        } else {
            $_SESSION['flag']++;
            if($_SESSION['flag']==5){
                $_SESSION['login']=false;
                $_SESSION['time']=time();
            }
            die("<script>alert(\"密码错误\");location.assign(\"login.html\")</script>");
        }
    }else{
        die("<script>alert(\"你已经连续登陆五次错误，请半小时后登录\");location.assign(\"login.html\")</script>");
    }