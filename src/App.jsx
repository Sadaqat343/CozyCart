
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Existing components
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductSection from './components/ProductSection';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import FeaturedSlider from './components/FeaturedSlider';
// New pages
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';

// Home page
function Home() {
  return (
    <>
      <main>
        <Hero />
        <Categories />
        <ProductSection />
        <FeaturedSlider />
        <About />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}

// Main App
function App() {
  return (
    <BrowserRouter>
      <AnnouncementBar />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
