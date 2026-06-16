import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { images } from '../data';

const navItems = [
  'Thiết kế nội thất',
  'Thi công nội thất',
  'Cải tạo sửa chữa',
  'Kiến thức',
  'Video'
];

const dashboardUrl = 'http://localhost/noithat-react-php/noithat-react-php/backend/dashboard';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-amber-500 text-sm text-white">
        <div className="container-custom flex flex-wrap items-center justify-between gap-2 py-2">
          <span>Chào mừng bạn đến với Nội thất Chúng Long.</span>
          <div className="hidden gap-5 md:flex">
            <a href="#about">Giới thiệu</a>
            <a href="#news">Tin tức</a>
            <a href="#contact">Liên hệ & góp ý</a>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="container-custom flex min-h-20 items-center justify-between gap-4 py-3">
          <a href="/" className="flex items-center gap-3">
            <img src={images.logo} className="h-14 w-52 object-contain" alt="Chúng Long" />
          </a>

          <nav className="hidden items-center gap-6 text-sm font-semibold uppercase lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item}`} className="hover:text-red-700">
                {item}
              </a>
            ))}
            <a className="rounded bg-red-700 px-3 py-2 text-white hover:bg-amber-500" href={dashboardUrl}>
              Dashboard
            </a>
          </nav>

          <button onClick={() => setOpen(true)} className="rounded border border-stone-300 p-2 lg:hidden" aria-label="Mở menu">
            <Menu />
          </button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] bg-black/50" onClick={() => setOpen(false)}>
          <div className="h-full w-72 bg-white p-5" onClick={(event) => event.stopPropagation()}>
            <button className="float-right" onClick={() => setOpen(false)} aria-label="Đóng menu">
              <X />
            </button>
            <img src={images.logo} className="mb-6 h-12" alt="Chúng Long" />
            {navItems.map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setOpen(false)} className="block border-b py-3 font-semibold">
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
