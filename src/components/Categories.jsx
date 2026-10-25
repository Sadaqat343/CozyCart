
const categories = [
  {
    number: '01',
    title: 'For Men',
    alt: "Men's fashion",
    image:
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80',
    link: '/men',
  },
  {
    number: '02',
    title: 'For Women',
    alt: "Women's fashion",
    image:
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=700&q=80',
    link: '/women',
  },
  {
    number: '03',
    title: 'For Kids',
    alt: "Children's fashion",
    image:
      'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=700&q=80',
    link: '/kids',
  },
  {
    number: '04',
    title: 'Perfumes',
    alt: 'Perfume and fragrances',
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=80',
    link: '#shop',
  },
  {
    number: '05',
    title: 'Watches',
    alt: 'Wristwatch collection',
    image:
      'https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=80',
    link: '#shop',
  },
  {
    number: '06',
    title: 'Bags & Beauty',
    alt: 'Bags and beauty products',
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80',
    link: '#shop',
  },
];

function Categories() {
  return (
    <section
      id="categories"
      className="px-[7%] py-20 max-md:px-[5%] max-md:py-[60px]"
    >
      <div className="mb-[30px] flex items-end justify-between gap-[25px] max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-2">
        <div>
          <p className="mb-[10px] text-[10px] font-bold tracking-[2px] text-[#7898a5]">
            SOMETHING FOR EVERYONE
          </p>

          <h2 className="text-[clamp(32px,4vw,45px)] leading-[1.15] tracking-[-1.5px]">
            Shop your way.
          </h2>
        </div>

        <p className="max-w-[300px] text-[12px] leading-[1.8] text-[#777a7d]">
          Discover fashion, fragrances, accessories, and beauty for every day.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 max-[800px]:grid-cols-2 max-[480px]:grid-cols-1">
        {categories.map((category) => (
          <a
            key={category.number}
            href={category.link}
            className="group relative h-[370px] overflow-hidden bg-[#f5f0e8] text-white max-[800px]:h-[320px] max-[480px]:h-[350px]"
          >
            <img
              src={category.image}
              alt={category.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-[22px] right-[15px]">
              <span className="text-[9px] tracking-[1.5px]">
                COLLECTION {category.number}
              </span>

              <h3 className="my-[5px] text-[28px]">
                {category.title}
              </h3>

              <p className="text-[11px]">Explore collection ↗</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Categories;
