<?php
require __DIR__ . '/cors.php';
require __DIR__ . '/../config/database.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $stmt = $pdo->query('SELECT * FROM contacts ORDER BY id DESC');
    echo json_encode($stmt->fetchAll(), JSON_UNESCAPED_UNICODE);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true) ?: $_POST;
$stmt = $pdo->prepare('INSERT INTO contacts(name,phone,address,message) VALUES(?,?,?,?)');
$stmt->execute([
    $data['name'] ?? '',
    $data['phone'] ?? '',
    $data['address'] ?? '',
    $data['message'] ?? ''
]);

echo json_encode([
    'success' => true,
    'message' => 'Đã gửi thông tin, chúng tôi sẽ liên hệ lại.'
], JSON_UNESCAPED_UNICODE);
