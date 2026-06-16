<?php
require 'auth.php';
require_login();
require __DIR__ . '/../config/database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $stmt = $pdo->prepare('INSERT INTO posts(title,category,image,description,created_at) VALUES(?,?,?,?,CURDATE())');
  $stmt->execute([$_POST['title'], $_POST['category'], $_POST['image'], $_POST['description']]);
  header('Location: index.php');
  exit;
}

if (isset($_GET['delete'])) {
  $pdo->prepare('DELETE FROM posts WHERE id=?')->execute([(int) $_GET['delete']]);
  header('Location: index.php');
  exit;
}

$posts = $pdo->query('SELECT * FROM posts ORDER BY id DESC')->fetchAll();
$contacts = $pdo->query('SELECT * FROM contacts ORDER BY id DESC LIMIT 20')->fetchAll();
$countPosts = $pdo->query('SELECT COUNT(*) c FROM posts')->fetch()['c'];
$countContacts = $pdo->query('SELECT COUNT(*) c FROM contacts')->fetch()['c'];
$countCats = $pdo->query('SELECT COUNT(DISTINCT category) c FROM posts')->fetch()['c'];
$assetSuggestions = [
  '/assets/project-1.png',
  '/assets/project-2.png',
  '/assets/project-3.png',
  '/assets/project-4.png',
  '/assets/project-5.png',
  '/assets/project-6.png',
  '/assets/news-1.png',
  '/assets/news-2.png',
  '/assets/service-design.png',
  '/assets/service-build.png',
  '/assets/service-repair.png'
];
?>
<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <title>Dashboard Chúng Long</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="wrap">
    <div class="top">
      <div>
        <h1>Dashboard quản lý Nội thất Chúng Long</h1>
        <p>Quản lý bài viết, dự án và thông tin khách liên hệ.</p>
      </div>
      <a class="btn yellow" href="auth.php?logout=1">Đăng xuất</a>
    </div>

    <div class="stats" style="margin-top:20px">
      <div class="stat"><b><?= $countPosts ?></b><br>Bài viết</div>
      <div class="stat"><b><?= $countCats ?></b><br>Danh mục</div>
      <div class="stat"><b><?= $countContacts ?></b><br>Liên hệ</div>
    </div>

    <div class="grid">
      <div class="card">
        <h2>Thêm bài viết / dự án</h2>
        <form method="post">
          <input name="title" placeholder="Tiêu đề" required>
          <select name="category">
            <option>Thiết kế nội thất</option>
            <option>Thi công nội thất</option>
            <option>Cải tạo sửa chữa</option>
            <option>Kiến thức</option>
          </select>
          <input name="image" placeholder="/assets/project-1.png" list="asset-list" value="/assets/project-1.png">
          <datalist id="asset-list">
            <?php foreach ($assetSuggestions as $asset): ?>
              <option value="<?= htmlspecialchars($asset) ?>"></option>
            <?php endforeach; ?>
          </datalist>
          <textarea name="description" rows="5" placeholder="Mô tả"></textarea>
          <button>Thêm mới</button>
        </form>
      </div>

      <div class="card">
        <h2>Liên hệ mới nhất</h2>
        <table class="table">
          <tr><th>Tên</th><th>SĐT</th><th>Nội dung</th></tr>
          <?php foreach ($contacts as $contact): ?>
            <tr>
              <td><?= htmlspecialchars($contact['name']) ?></td>
              <td><?= htmlspecialchars($contact['phone']) ?></td>
              <td><?= htmlspecialchars($contact['message']) ?></td>
            </tr>
          <?php endforeach; ?>
        </table>
      </div>
    </div>

    <div class="card" style="margin-top:20px">
      <h2>Danh sách bài viết</h2>
      <table class="table">
        <tr><th>Ảnh</th><th>Tiêu đề</th><th>Danh mục</th><th>Ngày</th><th></th></tr>
        <?php foreach ($posts as $post): ?>
          <tr>
            <td>
              <img class="thumb" src="../../frontend/public<?= htmlspecialchars($post['image']) ?>" onerror="this.src='../../frontend/public/assets/project-1.png'">
            </td>
            <td><?= htmlspecialchars($post['title']) ?></td>
            <td><?= htmlspecialchars($post['category']) ?></td>
            <td><?= htmlspecialchars($post['created_at']) ?></td>
            <td><a class="btn" onclick="return confirm('Xóa bài này?')" href="?delete=<?= $post['id'] ?>">Xóa</a></td>
          </tr>
        <?php endforeach; ?>
      </table>
    </div>
  </div>
</body>
</html>
