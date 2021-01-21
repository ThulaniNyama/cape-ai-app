<?php
	class readDB extends SQLite3 {
		function __construct() {
			$this->open('CapeAIdb/capeAI.s3db');
		}
	}
	$db = new readDB();
	if (!$db) {
		echo $db->lastErrorMsg();
    }
	else {
		$sql =<<<EOF
			SELECT Name from Candidate;
EOF;
	}

	$result = $db->query($sql);
	$Name = $result->fetch_assoc(SQLITE3_ASSOC);
	$db->close();
?>