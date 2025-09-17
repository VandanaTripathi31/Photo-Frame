import blogs from "../../../data/blogs.json";

export default function BlogDetail({ params }) {
  const { slug } = params;
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return <p className="text-center py-20">Blog not found!</p>;

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-72 mt-[80px] object-cover rounded-xl"
      />
      <h1 className="text-3xl font-bold text-gray-800 mt-6">{blog.title}</h1>
      <p className="text-gray-500 text-sm mt-2">{blog.date}</p>
      <div className="mt-6 text-gray-700 leading-relaxed">{blog.content}</div>
    </div>
  );
}
