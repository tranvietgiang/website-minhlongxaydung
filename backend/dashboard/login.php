<?php require 'auth.php'; ?>
<!doctype html>
<html lang="vi">
<head>
  <meta charset="utf-8">
  <title>Đăng nhập quản trị</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <form class="login" method="post">
    <h2>Dashboard Nội thất Chúng Long</h2>
    <p>Đăng nhập để quản lý bài viết, dự án và liên hệ.</p>
    <?php if (!empty($error)) echo '<p style="color:red">' . htmlspecialchars($error) . '</p>'; ?>
    <input name="username" placeholder="Tài khoản" required>
    <input name="password" type="password" placeholder="Mật khẩu" required>
    <button>Đăng nhập</button>
    <p><small>Demo: admin / 123456</small></p>
  </form>
</body>
</html>
