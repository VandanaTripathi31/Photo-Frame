export default function OfferBanner() {
  const banners = [
    { id: 1, image: "/Images/offer0.png", link: "/offer/1" },
    { id: 2, image: "/Images/offer1.jpeg", link: "/offer/2" },
    { id: 2, image: "/Images/offer3.jpeg", link: "/offer/2" },
    { id: 3, image: "/Images/offer2.jpeg", link: "/offer/3" },
    { id: 4, image: "/Images/offer4.jpeg", link: "/offer/4" },
  ];

  return (
    <div className="relative overflow-hidden bg-white py-6">
      <div className="flex gap-6 animate-scroll">
        {banners.concat(banners).map((banner, i) => (
          <a key={i} href={banner.link} className="flex-shrink-0">
            <img
              src={banner.image}
              alt="Offer Banner"
              className="w-[250px] md:w-[300px] lg:w-[350px] h-20 md:h-40 lg:h-40 object-cover rounded-xl shadow-md"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
