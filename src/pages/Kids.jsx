
import ProductSection from '../components/ProductSection';

const kidsProducts = [
  {
    id: 1,
    name: 'Kids Casual Jacket',
    category: 'Jackets',
    price: 2999,
    image:
      'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Kids Everyday Outfit',
    category: 'Clothing',
    price: 1999,
    image:
      'https://images.unsplash.com/photo-1503919005314-30d93d07d823?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Kids Casual Shoes',
    category: 'Shoes',
    price: 2499,
    image:
      'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Kids Fashion Set',
    category: 'Outfits',
    price: 2299,
    image:
      'https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?w=600&auto=format&fit=crop&q=80',
  },
];

function Kids() {
  return (
    <main>
      <ProductSection
        id="kids-products"
        products={kidsProducts}
        eyebrow="KIDS' COLLECTION"
        title="Little Looks, Big Adventures"
        description="Discover comfortable clothing and everyday favorites for little ones."
      />
    </main>
  );
}

export default Kids;
