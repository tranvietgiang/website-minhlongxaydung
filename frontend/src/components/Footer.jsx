import { Mail, MapPin, Phone } from 'lucide-react';

const dashboardUrl = 'http://localhost/noithat-react-php/noithat-react-php/backend/dashboard';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white">
      <div className="container-custom grid gap-8 py-10 md:grid-cols-3">
        <div>
          <h3 className="mb-3 text-xl font-bold">Về chúng tôi</h3>
          <p className="leading-7 text-zinc-300">
            Chuyên tư vấn, thiết kế, thi công nội thất nhà ở, chung cư, khách sạn, cafe và văn phòng.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-bold">Thông tin liên hệ</h3>
          <p><MapPin className="inline" size={16} /> Hà Đông, Hà Nội</p>
          <p><Phone className="inline" size={16} /> 099999999999</p>
          <p><Mail className="inline" size={16} /> dabc@gmail.com</p>
        </div>

        <div>
          <h3 className="mb-3 text-xl font-bold">Dashboard</h3>
          <p className="text-zinc-300">Quản lý bài viết, dự án và khách liên hệ bằng PHP.</p>
          <a href={dashboardUrl} className="mt-3 inline-block rounded bg-amber-500 px-5 py-2 font-bold">
            Vào quản trị
          </a>
        </div>
      </div>
      <div className="bg-red-800 py-3 text-center">Copyright 2026 © Nội thất Chúng Long</div>
    </footer>
  );
}
