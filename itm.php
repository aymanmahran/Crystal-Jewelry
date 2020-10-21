<?php
$host = "Localhost";
$username = "id5651719_users";
$password = "crystalcartsdb";
$database = "id5651719_carts";

$link = mysqli_connect($host, $username, $password, $database);

$id = $_POST["id"];

$sql = "SELECT id, title, price, size, image FROM users WHERE user='" . $id . "'";
$result = mysqli_query($link, $sql);

if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        echo $row["id"] . ','. $row["title"] . ',' . $row["price"] . ',' . $row["size"] . ',' . $row["image"] . ',';
    }
} else {
    echo 0;
}

mysqli_close($link);
?>
