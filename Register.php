<?php

$con = mysqli_connect("localhost","tayorh","gafarmariam1234$","tayodb");

$username = $_POST["username"];
$mobile = $_POST["mobile"];
$password = $_POST["password"];
$category = $_POST["category"];
$image = $_POST["image"];

$statement = mysqli_prepare($con, "INSERT INTO imagesection (username, mobile, password, category, image) VALUES (?,?,?,?,?)");
mysqli_stmt_bind_param($statement,"sssss",$username,$mobile,$password,$category,$image);
mysqli_stmt_execute($statement);

mysqli_stmt_close($statement);


mysqli_close($con);



?>
