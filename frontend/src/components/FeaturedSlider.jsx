
import { useState } from 'react';

const slides = [
  {
    title: 'Discover Your Style',
    description: 'Explore clothing for every occasion.',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200',
  },
  {
    title: 'Everyday Essentials',
    description: 'Find comfort and style in every detail.',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200',
  },
  {
    title: 'Complete Your Look',
    description: 'Discover accessories for your style.',
    image: 'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?w=1200',
  },
];

function FeaturedSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + slides.length) % slides.length
    );
  };

  const currentSlide = slides[currentIndex];

  return (
    <section className="bg-[#f5f0e8] px-[7%] py-16 max-md:px-[5%]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 text-center">
          <p className="mb-3 text-xs font-bold tracking-[2px] text-[#7898a5]">
            EXPLORE COZYCART
          </p>
          <h2 className="text-3xl font-semibold text-[#252a30]">
            Featured Collections
          </h2>
        </div>

        <div className="relative overflow-hidden bg-white">
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            className="h-[420px] w-full object-cover max-md:h-[280px]"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 px-5 text-center">
            <h3 className="text-3xl font-semibold text-white max-md:text-2xl">
              {currentSlide.title}
            </h3>

            <p className="mt-3 text-sm text-white">
              {currentSlide.description}
            </p>
          </div>

          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white px-4 py-3 text-xl text-[#252a30] hover:bg-[#dceaf0]"
          >
            &#10094;
          </button>

          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white px-4 py-3 text-xl text-[#252a30] hover:bg-[#dceaf0]"
          >
            &#10095;
          </button>
        </div>

        <div className="mt-5 flex justify-center gap-3">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full ${
                currentIndex === index
                  ? 'bg-[#7898a5]'
                  : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedSlider;
