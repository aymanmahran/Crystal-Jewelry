<?php
$host = "Localhost";
$username = "id5651719_u180";
$password = "crystalproductsdb";
$database = "id5651719_products_list";

$link = mysqli_connect($host, $username, $password, $database);

$no = $_POST["no"];
$fn = $_POST["fn"];
$ln = $_POST["ln"];
$em = $_POST["em"];
$ad = $_POST["ad"];
$ph = $_POST["ph"];
$ts = $_POST["ts"];

$t = str_replace("*","\r\n", $ts);

$sql = "INSERT INTO orders VALUES ( '" . $no . "', '" . $fn . "', '" . $ln . "', '" . $em . "', '" . $ad . "', '" . $ph . "', '" . $t . "')";
$result = mysqli_query($link, $sql);

if ($result) {
    echo 1;
} else {
    echo 0;
}

mysqli_close($link);
?>