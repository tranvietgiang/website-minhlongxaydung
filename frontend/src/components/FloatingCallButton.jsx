import { Phone } from 'lucide-react';

export default function FloatingCallButton() {
  return (
    <a href="tel:09999999999" className="fixed bottom-6 left-6 rounded-full bg-green-500 p-4 text-white shadow-lg" aria-label="Gọi điện">
      <Phone />
    </a>
  );
}
