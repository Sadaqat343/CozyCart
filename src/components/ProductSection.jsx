
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Classic Winter Jacket',
    category: 'Jackets',
    price: 5499,
    image:
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Cozy Knit Sweater',
    category: 'Sweaters',
    price: 3299,
    image:
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Everyday Hoodie',
    category: 'Hoodies',
    price: 2799,
    image:
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Winter Puffer Coat',
    category: 'Coats',
    price: 6999,
    image:
      'https://images.unsplash.com/photo-1544923246-77307dd654cb?w=600&auto=format&fit=crop&q=80',
  },
];

function ProductSection() {
  return (
    <section
      id="shop"
      className="bg-white px-[7%] py-20 text-[#252a30] max-md:px-[5%] max-md:py-[55px]"
    >
      <div className="mb-8 flex items-end justify-between gap-5 max-[520px]:items-start">
        <div>
          <p className="mb-3 text-[12px] font-bold tracking-[2px] text-[#718997]">
            THE WINTER COLLECTION
          </p>

          <h2 className="mb-[10px] text-[clamp(28px,4vw,40px)] font-bold">
            Winter essentials
          </h2>

          <p className="m-0 text-[14px] leading-[1.6] text-[#73777b]">
            Find your comfort for the colder days.
          </p>
        </div>

        <span className="whitespace-nowrap pb-1 text-[14px] text-[#73777b] max-[520px]:text-[12px]">
          {products.length} products
        </span>
      </div>

      <div className="grid grid-cols-4 gap-6 max-[1000px]:grid-cols-2 max-[520px]:gap-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
