
import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const defaultProducts = [
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

function ProductSection({
  products: providedProducts,
  eyebrow = 'THE WINTER COLLECTION',
  title = 'Winter essentials',
  description = 'Find your comfort for the colder days.',
  id = 'shop',
}) {
  const [apiProducts, setApiProducts] = useState(defaultProducts);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:3000/products');

        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }

        const data = await response.json();

        const formattedProducts = data.map((product) => ({
          ...product,
          image: product.imageUrl || product.image || '',
        }));

        setApiProducts(formattedProducts);
      } catch (error) {
        console.error('Products API error:', error);
      }
    };

    fetchProducts();
  }, []);

  const displayedProducts = providedProducts ?? apiProducts;

  return (
    <section
      id={id}
      className="bg-white px-[7%] py-20 text-[#252a30] max-md:px-[5%] max-md:py-[55px]"
    >
      <div className="mb-8 flex items-end justify-between gap-5 max-[520px]:items-start">
        <div>
          <p className="mb-3 text-[12px] font-bold tracking-[2px] text-[#718997]">
            {eyebrow}
          </p>

          <h2 className="mb-[10px] text-[clamp(28px,4vw,40px)] font-bold">
            {title}
          </h2>

          <p className="m-0 text-[14px] leading-[1.6] text-[#73777b]">
            {description}
          </p>
        </div>

        <span className="whitespace-nowrap pb-1 text-[14px] text-[#73777b] max-[520px]:text-[12px]">
          {displayedProducts.length} products
        </span>
      </div>

      <div className="grid grid-cols-4 gap-6 max-[1000px]:grid-cols-2 max-[520px]:gap-3">
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
