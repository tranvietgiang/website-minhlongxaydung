CREATE DATABASE IF NOT EXISTS noithat_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE noithat_db;

CREATE TABLE IF NOT EXISTS categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL
);

CREATE TABLE IF NOT EXISTS posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  category VARCHAR(150) NOT NULL,
  image TEXT,
  description TEXT,
  created_at DATE DEFAULT (CURRENT_DATE)
);

CREATE TABLE IF NOT EXISTS contacts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150),
  phone VARCHAR(30),
  address VARCHAR(255),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO posts (title, category, image, description, created_at) VALUES
('Thiết kế căn hộ Season Avenue sang trọng và ấm cúng', 'Thiết kế nội thất', '/assets/project-1.png', 'Không gian phòng khách, bếp và phòng ngủ được bố trí gọn gàng, vật liệu dễ bảo trì và phù hợp gia đình trẻ.', '2026-06-16'),
('Thi công nội thất Royal City cho gia đình anh Thiện', 'Thi công nội thất', '/assets/project-2.png', 'Thi công trọn gói theo bản vẽ, kiểm soát tiến độ và bàn giao từng hạng mục rõ ràng.', '2026-06-16'),
('Thiết kế và thi công biệt thự Mimosa Aquabay', 'Thiết kế nội thất', '/assets/project-3.png', 'Phong cách hiện đại, nhấn vào vật liệu gỗ, ánh sáng tự nhiên và các khoảng lưu trữ thông minh.', '2026-06-16'),
('Cải tạo căn hộ Gold Silk Hà Đông', 'Cải tạo sửa chữa', '/assets/project-4.png', 'Cải tạo nhà cũ theo ngân sách, xử lý lại công năng và làm mới bề mặt hoàn thiện.', '2026-06-16'),
('Thiết kế nội thất chung cư Mandarin Garden 2', 'Kiến thức', '/assets/project-5.png', 'Gợi ý bố trí nội thất chung cư khoa học, thoáng sáng và dễ tùy biến theo nhu cầu sử dụng.', '2026-06-16'),
('Thi công nội thất chung cư Tứ Hiệp Plaza', 'Thi công nội thất', '/assets/project-6.png', 'Giải pháp thi công tiết kiệm chi phí nhưng vẫn giữ được sự chỉn chu trong từng chi tiết.', '2026-06-16');
