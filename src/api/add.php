<?php

$dbconn = pg_connect("host=localhost port=5432 dbname=testbase user=postgres password=danil1234")
or die('Failed to connect: ' . pg_last_error());


$result = pg_insert($dbconn, 'students', $_POST);

header("Content-Type: application/json");
?>

