USE noithat_db;

UPDATE posts SET
  title = 'Thiết kế căn hộ Season Avenue sang trọng và ấm cúng',
  category = 'Thiết kế nội thất',
  image = '/assets/project-1.png',
  description = 'Không gian phòng khách, bếp và phòng ngủ được bố trí gọn gàng, vật liệu dễ bảo trì và phù hợp gia đình trẻ.'
WHERE id = 1;

UPDATE posts SET
  title = 'Thi công nội thất Royal City cho gia đình anh Thiện',
  category = 'Thi công nội thất',
  image = '/assets/project-2.png',
  description = 'Thi công trọn gói theo bản vẽ, kiểm soát tiến độ và bàn giao từng hạng mục rõ ràng.'
WHERE id = 2;

UPDATE posts SET
  title = 'Thiết kế và thi công biệt thự Mimosa Aquabay',
  category = 'Thiết kế nội thất',
  image = '/assets/project-3.png',
  description = 'Phong cách hiện đại, nhấn vào vật liệu gỗ, ánh sáng tự nhiên và các khoảng lưu trữ thông minh.'
WHERE id = 3;

UPDATE posts SET
  title = 'Cải tạo căn hộ Gold Silk Hà Đông',
  category = 'Cải tạo sửa chữa',
  image = '/assets/project-4.png',
  description = 'Cải tạo nhà cũ theo ngân sách, xử lý lại công năng và làm mới bề mặt hoàn thiện.'
WHERE id = 4;

UPDATE posts
SET image = '/assets/project-1.png'
WHERE image LIKE 'http://%' OR image LIKE 'https://%';
