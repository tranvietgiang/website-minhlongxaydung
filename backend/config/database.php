<?php
$host = 'localhost';
$dbname = 'noithat_db';
$username = 'root';
$password = '';
$port = 3306;
try {
    $pdo = new PDO("mysql:host=$host;port=$port;dbname=$dbname;charset=utf8mb4", $username, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);
} catch (PDOException $e) {
    http_response_code(500);
    die(json_encode(['error' => 'Lỗi kết nối database: ' . $e->getMessage()]));
}
