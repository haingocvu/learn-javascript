<?php  
require_once "DBConnect.php";

$id = $_GET["id"];
$conn = new DBConnect();

$sql = "SELECT fullname, email FROM users WHERE id = ?";
$params = [$id];

$rs = $conn->loadOneRow($sql, $params);

echo "<table>
<tr>
<th>full name</th>
<th>email</th>
</tr>";
 echo "<tr>";
echo "<td>" . $rs->fullname . "</td>";
echo "<td>" . $rs->email . "</td>";
echo "</tr>";
echo "</table>";

?>