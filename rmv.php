
<?php
$host = "Localhost";
$username = "id5651719_users";
$password = "crystalcartsdb";
$database = "id5651719_carts";

$link = mysqli_connect($host, $username, $password, $database);

$id = $_POST["id"];
$size = $_POST["size"];
$title = $_POST["title"];

$sql = "DELETE FROM users WHERE user='" . $id . "' AND title='" . $title ."' AND size='" . $size . "' LIMIT 1";
$result = mysqli_query($link, $sql);

if ($result) {
    echo 1;
} else {
    echo 0;
}

mysqli_close($link);
?>


