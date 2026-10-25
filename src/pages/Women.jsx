
import ProductSection from '../components/ProductSection';

const womenProducts = [
  {
    id: 1,
    name: 'Elegant Winter Coat',
    category: 'Clothing',
    price: 5999,
    image:
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Classic Handbag',
    category: 'Bags',
    price: 4499,
    image:
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Signature Perfume',
    category: 'Fragrance',
    price: 3499,
    image:
      'https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Everyday Beauty',
    category: 'Beauty',
    price: 2499,
    image:
     'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&auto=format&fit=crop&q=80',
  },
];

function Women() {
  return (
    <main>
      <ProductSection
        id="women-products"
        products={womenProducts}
        eyebrow="WOMEN'S COLLECTION"
        title="Discover Your Style"
        description="Explore clothing, bags, fragrances, and beauty essentials."
      />
    </main>
  );
}

export default Women;
