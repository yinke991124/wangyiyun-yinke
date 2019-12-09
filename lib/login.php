<?php

include('./conn.php');

$phone = $_REQUEST['phone'];
$password = $_REQUEST['pass'];
$sql = "select * from user where tel='$phone' and pass='$password'";
$result = $mysqli->query($sql); //执行查询语句



if ($result->num_rows > 0) {
    echo '{"msg":"1"}';
} else {
    echo '{"msg":"0"}';
}

$mysqli->close();
    // echo $insertSql;
