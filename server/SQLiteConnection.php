<?php

namespace App;

class SQLiteConnection{
	
	private $pdo;

	public function connect()
	{
		if ($this->pdo == null) 
		{
			try
			{
				$this->pdo = new PDO("sqlite:".config::PATH_TO_SQLITE_FILE);
			}
			catch (PDOException $e)
			{
				echo "Connection failed: " . $e->getMessage() . "<br>";
			}
		}
		return $this->pdo;
	}
}
?>