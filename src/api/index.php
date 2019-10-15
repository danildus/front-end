<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$dbconn = pg_connect("host=localhost port=5432 dbname=testbase user=postgres password=danil1234")
    or die('Failed to connect: ' . pg_last_error());

$query = 'SELECT * FROM students';
$result = pg_query($query) or die('The request failed: ' . pg_last_error());

$arr = array();
while ($row = pg_fetch_row($result)) {
  $arr[] = array("name" => $row[0], "specialization" => $row[1], "class" => $row[2]);
}

echo json_encode($arr);

pg_free_result($result);
pg_close($dbconn);


?>





