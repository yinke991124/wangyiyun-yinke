<?php
// 获取数据库内所有的内容
    include('./conn.php');

    $sql = "select * from product";

    $res = $mysqli->query($sql);

    $arr = array();

    while($row = $res->fetch_assoc()){
        array_push($arr,$row);
    }

    $json = json_encode($arr);

    echo $json;

    $mysqli->close();
?>