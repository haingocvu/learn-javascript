<?php  
header("Content-Type: application/json; charset=UTF-8");
require_once "DBConnect.php";
$dataobj = json_decode($_POST["data"]);
$sql = "SELECT fullname, email FROM " . $dataobj->table . " LIMIT " . $dataobj->limit;

$conn = new DBConnect();
$rs = $conn->loadMoreRow($sql);
echo json_encode($rs);

?>