<?php
$host = "Localhost";
$username = "id5651719_users";
$password = "crystalcartsdb";
$database = "id5651719_carts";

$link = mysqli_connect($host, $username, $password, $database);

$id = $_POST["id"];
$size = $_POST["size"];
$user = $_POST["user"];
$title = $_POST["title"];
$price = $_POST["price"];
$img = $_POST["img"];

$sql = "INSERT INTO users VALUES ( '" . $user . "', '" . $id . "', '" . $title . "', '" . $price . "', '" . $size . "', '" . $img. "')";
$result = mysqli_query($link, $sql);

if ($result) {
    echo 1;
} else {
    echo 0;
}

mysqli_close($link);
?>