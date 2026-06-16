<?php
session_start();

$ADMIN_USER = 'admin';
$ADMIN_PASS = '123456';

if (isset($_POST['username'])) {
    if ($_POST['username'] === $ADMIN_USER && $_POST['password'] === $ADMIN_PASS) {
        $_SESSION['admin'] = true;
        header('Location: index.php');
        exit;
    }
    $error = 'Sai tài khoản hoặc mật khẩu';
}

if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: login.php');
    exit;
}

function require_login()
{
    if (empty($_SESSION['admin'])) {
        header('Location: login.php');
        exit;
    }
}
