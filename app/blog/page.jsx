import blogs from "../../data/blogs.json";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center  mt-20 mb-8 text-gray-800">
        Our Blog
      </h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blog/${blog.slug}`}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800">
                {blog.title}
              </h2>
              <p className="text-sm text-gray-600 mt-2">{blog.date}</p>
              <span className="text-indigo-600 mt-3 inline-block font-medium">
                Read More →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
