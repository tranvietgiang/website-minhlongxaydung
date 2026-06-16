<?php
require __DIR__ . '/cors.php';
require __DIR__ . '/../config/database.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $stmt = $pdo->query("SELECT id,title,category,image,description,DATE_FORMAT(created_at,'%d/%m/%Y') date FROM posts ORDER BY id DESC");
    echo json_encode($stmt->fetchAll(), JSON_UNESCAPED_UNICODE);
    exit;
}

if ($method === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true) ?: $_POST;
    $stmt = $pdo->prepare('INSERT INTO posts(title,category,image,description,created_at) VALUES(?,?,?,?,CURDATE())');
    $stmt->execute([
        $data['title'] ?? '',
        $data['category'] ?? '',
        $data['image'] ?? '/assets/project-1.png',
        $data['description'] ?? ''
    ]);
    echo json_encode(['success' => true, 'message' => 'Đã thêm bài viết'], JSON_UNESCAPED_UNICODE);
    exit;
}

if ($method === 'DELETE') {
    parse_str($_SERVER['QUERY_STRING'] ?? '', $q);
    $id = (int) ($q['id'] ?? 0);
    $stmt = $pdo->prepare('DELETE FROM posts WHERE id=?');
    $stmt->execute([$id]);
    echo json_encode(['success' => true, 'message' => 'Đã xóa bài viết'], JSON_UNESCAPED_UNICODE);
    exit;
}

http_response_code(405);
echo json_encode(['error' => 'Method not allowed'], JSON_UNESCAPED_UNICODE);
