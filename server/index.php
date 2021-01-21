<?php
	require 'vendor/autoload.php';

	use App\SQLiteConnection;

	$pdo = (new SQLiteConnection())->connect();
	if ($pdo != null) {
		echo 'connected';
	} else {
		echo 'disconnected';
	}
?>