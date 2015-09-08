<?php

$con = mysqli_connect("localhost","tayorh","gafarmariam1234$","tayodb");

$username = $_POST["username"];
$password = $_POST["password"];

$statement = mysqli_prepare($con, "SELECT * FROM imagesection WHERE username = ? AND password = ?");
mysqli_stmt_bind_param($statement,"ss",$username,$password);
mysqli_stmt_execute($statement);

mysqli_stmt_store_result($statement);
mysqli_stmt_bind_result($statement, $username,$mobile,$password,$category,$image);

$user = array();

while(mysqli_stmt_fetch($statement)){
	$user[username] = $username;
	$user[mobile] = $mobile;
	$user[password] = $password;
	$user[category] = $category;
	$user[image] = $image;
}

echo json_encode($user);

mysqli_stmt_close($statement);

mysqli_close($con);
?> 
