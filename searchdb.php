<?php
$host = "Localhost";
$username = "id5651719_u180";
$password = "crystalproductsdb";
$database = "id5651719_products_list";

$link = mysqli_connect($host, $username, $password, $database);

$category = $_REQUEST["category"];

$sql = "SELECT title, image, price, code FROM availabe_products WHERE type='" . $category . "' ORDER BY price";
$result = mysqli_query($link, $sql);

if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        echo $row["title"] . ','. $row["image"] . ',' . $row["price"] . ',' . $row["code"] . ',';
    }
} else {
    echo 0;
}

mysqli_close($link);
?>