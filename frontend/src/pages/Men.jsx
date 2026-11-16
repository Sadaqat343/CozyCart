
import ProductSection from '../components/ProductSection';

const menProducts = [
  {
    id: 1,
    name: 'Classic Casual Jacket',
    category: 'Jackets',
    price: 5499,
    image:
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Everyday Casual Shirt',
    category: 'Shirts',
    price: 2499,
    image:
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name:"Classic Men's Hoodie",
    category: 'Hoodies',
    price: 2799,
    image:
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Smart Casual Outfit',
    category: 'Fashion',
    price: 3999,
    image:
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&auto=format&fit=crop&q=80',
  },
];

function Men() {
  return (
    <>
      <section className="bg-[#f5f0e8] px-[7%] py-14 max-md:px-[5%]">
        <p className="mb-3 text-xs font-bold tracking-[2px] text-[#7898a5]">
          THE MEN'S COLLECTION
        </p>

        <h1 className="mb-4 text-4xl font-bold text-[#252a30] md:text-5xl">
          Everyday style, elevated.
        </h1>

        <p className="max-w-xl text-sm leading-7 text-[#73777b] md:text-base">
          Discover clothing and everyday essentials designed for comfort,
          confidence, and effortless style.
        </p>
      </section>

      <ProductSection
        id="men-products"
        products={menProducts}
        eyebrow="THE MODERN MAN"
        title="Redefine Your Style"
        description="Discover timeless clothing and everyday pieces made for your lifestyle."
      />
    </>
  );
}

export default Men;
