export default function SectionTitle({ icon, title }) {
  return (
    <h2 className="line-title mb-6 flex items-center gap-2 text-2xl font-bold text-red-700">
      {icon}
      {title}
    </h2>
  );
}
