export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Aarav Sharma",
      location: "Mumbai",
      photo: "/Images/boy2.jpeg",
      rating: 5,
      text: "Amazing quality frames! Delivery was quick and packaging was perfect.",
    },
    {
      id: 2,
      name: "Priya Verma",
      location: "Delhi",
      photo: "/Images/girls.jpg",
      rating: 4,
      text: "The designs are so elegant, totally worth the price. Love it!",
    },
    {
      id: 3,
      name: "Rahul Mehta",
      location: "Bangalore",
      photo: "/Images/boy1.webp",
      rating: 5,
      text: "Superb! My living room looks complete with these frames.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition"
            >
              <img
                src={review.photo}
                alt={review.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 border-4 border-[#728c70]"
              />
              <h4 className="text-lg font-semibold text-gray-800">
                {review.name}
              </h4>
              <p className="text-sm text-gray-500 mb-2">{review.location}</p>
              <div className="flex justify-center mb-3">
                {"⭐".repeat(review.rating)}
              </div>
              <p className="text-gray-600 italic">"{review.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
