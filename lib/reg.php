<?php
    // 1. 连接数据库
    include('./conn.php');

    // 业务逻辑
    // 1. 连接数据库
    // 2. 接收数据
    // 3. 验证数据
    // 4. 根据验证结果进行操作 插入/提示

    // 2. 接收数据
    $usertel = $_REQUEST['telnum'];
    $password = $_REQUEST['password'];


    // 3. 验证数据  判断手机号是否被注册
    $sql = "select * from user where tel='$usertel'";
    $result = $mysqli->query($sql); //执行查询语句

    if($result->num_rows>0){
        echo '{"msg":"0"}';
    }else {
        $insertSql = "insert into user(tel,pass) values('$usertel','$password')";
        // 当使用query函数执行插入操作的时候  返回的是插入的行数
        $res = $mysqli->query($insertSql);

        if($res){
        echo '{"msg":"1"}';
        }
    }

    

    

    $mysqli->close();
    // echo $insertSql;
