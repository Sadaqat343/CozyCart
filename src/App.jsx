
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductSection from './components/ProductSection';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />

      <main>
        <Hero />
        <Categories />
        <ProductSection />
        <About />
      </main>

      <Footer />
    </>
  );
}

export default App;

