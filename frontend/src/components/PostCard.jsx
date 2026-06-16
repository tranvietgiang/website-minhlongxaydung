export default function PostCard({ post }) {
  return (
    <article className="card-hover overflow-hidden rounded-lg border border-stone-200 bg-white">
      <img src={post.image} className="h-48 w-full object-cover" alt={post.title} />
      <div className="p-4">
        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-700">{post.category}</span>
        <h3 className="mt-3 line-clamp-2 text-lg font-bold">{post.title}</h3>
        <p className="mt-1 text-sm text-gray-500">{post.date}</p>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
      </div>
    </article>
  );
}
