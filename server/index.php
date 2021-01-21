	<?php
// header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Credentials: true");
// header("Access-Control-Max-Age: 1000");
// header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
// header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");
	function getConnection() {
		$servername = "cape-ai-app-main_db_1";
		$username = "root";
		$password = "random";
		$dbname = "capeai";
	
	try{
		$conn = new PDO("mysql:host=$servername;port=3306;dbname=$dbname", $username, $password);
		$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		// echo "CONNECTED";
		return $conn;
	}catch (PDOException $e){
		echo " Connection failed: ".$e->getMessage();
	}
	}
	$pdo =	getConnection();
	$stmt=$pdo->query("SELECT * from capeai.people where name = 'Thulani' LIMIT 1");
	$data =  $stmt->fetch();
	// echo json_encode($data);
	echo $Name = json_encode($data);
	?>