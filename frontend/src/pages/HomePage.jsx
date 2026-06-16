import { Award, Clock, Gift, Heart, Mail, Phone, Search, Send, ShieldCheck, Wrench } from 'lucide-react';
import { useMemo, useState } from 'react';
import PostCard from '../components/PostCard';
import SectionTitle from '../components/SectionTitle';
import { API_URL, defaultPosts, images } from '../data';

const services = [
  {
    title: 'Thiết kế nội thất',
    image: '/assets/service-design.png',
    description: 'Lên mặt bằng công năng, phối cảnh 3D, vật liệu và hồ sơ thi công.'
  },
  {
    title: 'Thi công trọn gói',
    image: '/assets/service-build.png',
    description: 'Sản xuất, lắp đặt, nghiệm thu và bảo hành sau khi bàn giao.'
  },
  {
    title: 'Cải tạo sửa chữa',
    image: '/assets/service-repair.png',
    description: 'Làm mới nhà ở, căn hộ, văn phòng theo ngân sách rõ ràng.'
  }
];

export default function HomePage({ posts }) {
  const latestPosts = useMemo(() => posts.slice(0, 6), [posts]);

  return (
    <>
      <Hero />
      <Services />
      <PostsSection title="Thiết kế nội thất" category="Thiết kế nội thất" posts={latestPosts} icon={<Gift />} />
      <PostsSection title="Thi công nội thất" category="Thi công nội thất" posts={posts} icon={<Wrench />} />
      <PostsSection title="Cải tạo sửa chữa" category="Cải tạo sửa chữa" posts={posts} icon={<Clock />} />
      <CallToAction />
      <About />
      <Contact />
    </>
  );
}

function Hero() {
  return (
    <section
      className="relative min-h-[430px] overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(90deg,rgba(0,0,0,.62),rgba(0,0,0,.18)),url(${images.slider1})` }}
    >
      <div className="container-custom py-20 text-white md:py-24">
        <p className="mb-3 font-semibold text-amber-300">Nội thất đẹp - thi công chuyên nghiệp</p>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
          Thiết kế & thi công nội thất Chúng Long
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/90">
          Website React + Tailwind được code lại riêng, dùng ảnh local trong project để bạn dễ chỉnh sửa, thay ảnh và quản lý nội dung về sau.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-7 py-3 font-bold hover:bg-red-700">
            <Phone size={18} /> Liên hệ tư vấn miễn phí
          </a>
          <a href="#Thiết kế nội thất" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-bold text-red-700 hover:bg-amber-100">
            <Search size={18} /> Xem dự án
          </a>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="bg-white py-12">
      <div className="container-custom">
        <SectionTitle icon={<Award />} title="Dịch vụ của Chúng Long" />
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-lg border border-stone-200 bg-stone-50 p-4">
              <img src={service.image} alt={service.title} className="h-40 w-full rounded object-cover" />
              <h3 className="mt-4 text-lg font-bold text-red-700">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PostsSection({ title, category, posts, icon = <Gift /> }) {
  const items = posts.filter((post) => category === 'all' || post.category === category).slice(0, 6);

  return (
    <section id={title} className="py-10">
      <div className="container-custom">
        <SectionTitle icon={icon} title={title} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section
      className="bg-cover bg-center py-10 text-center text-white"
      style={{ backgroundImage: `linear-gradient(rgba(160,0,0,.86),rgba(160,0,0,.86)),url(${images.slider2})` }}
    >
      <p className="text-xl font-semibold">Tư vấn thiết kế, thi công và cải tạo nội thất theo nhu cầu thực tế.</p>
      <a href="#contact" className="mt-4 inline-flex rounded-full bg-amber-500 px-6 py-3 font-bold hover:bg-white hover:text-red-700">
        Liên hệ tư vấn miễn phí
      </a>
    </section>
  );
}

function About() {
  const reasons = [
    'Quy trình làm việc rõ ràng',
    'Báo giá minh bạch theo từng hạng mục',
    'Thiết kế sát nhu cầu sử dụng thực tế',
    'Thi công đúng tiến độ đã cam kết',
    'Vật liệu dễ kiểm tra và dễ bảo hành',
    'Hỗ trợ chỉnh sửa nội dung qua dashboard'
  ];

  return (
    <section id="about" className="bg-amber-50 py-12">
      <div className="container-custom grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SectionTitle icon={<Heart />} title="Vì sao lựa chọn Nội thất Chúng Long" />
          <p className="mb-6 leading-7 text-gray-600">
            Chúng Long tư vấn, thiết kế và thi công nội thất với định hướng gọn gàng, dễ quản lý, phù hợp nhà phố, chung cư, biệt thự và văn phòng.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason} className="rounded-lg bg-white p-4 shadow-sm">
                <ShieldCheck className="mb-2 h-5 w-5 text-red-700" />
                <span className="font-semibold">{reason}</span>
              </div>
            ))}
          </div>
        </div>
        <aside className="rounded-lg bg-white p-5 shadow">
          <h3 className="text-xl font-bold text-red-700">Giới thiệu</h3>
          <p className="mt-3 leading-7 text-gray-600">
            Source này dùng ảnh nội bộ trong thư mục assets, không phụ thuộc link bên ngoài. Sau này bạn chỉ cần thay file ảnh hoặc cập nhật dữ liệu trong dashboard.
          </p>
          <img src={images.gift} className="mt-4 rounded-lg" alt="Dịch vụ thiết kế" />
        </aside>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', address: '', message: '' });
  const [message, setMessage] = useState('');

  async function submit(event) {
    event.preventDefault();
    setMessage('Đang gửi...');

    try {
      const response = await fetch(`${API_URL}/contacts.php`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const result = await response.json();
      setMessage(result.message || 'Đã gửi liên hệ.');
      setForm({ name: '', phone: '', address: '', message: '' });
    } catch {
      setMessage('Không gọi được API, kiểm tra backend PHP nha.');
    }
  }

  return (
    <section id="contact" className="py-12">
      <div className="container-custom grid gap-8 lg:grid-cols-3">
        <div id="news" className="lg:col-span-2">
          <SectionTitle icon={<Mail />} title="Tin tức - bài viết" />
          <div className="grid gap-4 sm:grid-cols-2">
            {defaultPosts.slice(6, 8).map((post) => (
              <div key={post.id} className="flex gap-3 rounded-lg bg-white p-3 shadow">
                <img src={post.image} className="h-24 w-24 rounded object-cover" alt={post.title} />
                <div>
                  <b>{post.title}</b>
                  <p className="mt-1 text-sm text-gray-500">{post.date}</p>
                  <p className="mt-2 line-clamp-2 text-sm text-gray-600">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={submit} className="rounded-lg bg-white p-5 shadow-lg">
          <h3 className="mb-4 text-xl font-bold text-red-700">Liên hệ tư vấn</h3>
          <input className="mb-3 w-full rounded border p-3" placeholder="Tên của anh chị" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} required />
          <input className="mb-3 w-full rounded border p-3" placeholder="Số điện thoại" value={form.phone} onChange={(event) => setForm({ ...form, phone: event.target.value })} required />
          <input className="mb-3 w-full rounded border p-3" placeholder="Địa chỉ hiện tại" value={form.address} onChange={(event) => setForm({ ...form, address: event.target.value })} />
          <textarea className="mb-3 w-full rounded border p-3" rows="4" placeholder="Nội dung liên hệ" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} />
          <button className="flex w-full items-center justify-center gap-2 rounded bg-red-700 py-3 font-bold text-white hover:bg-amber-500">
            <Send size={18} /> Liên hệ báo giá
          </button>
          {message && <p className="mt-3 text-sm text-green-700">{message}</p>}
        </form>
      </div>
    </section>
  );
}
