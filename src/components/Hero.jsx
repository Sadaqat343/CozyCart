
function Hero() {
  return (
    <section
      id="home"
      className="grid items-center gap-10 bg-[#f5f0e8] px-[7%] py-16 md:grid-cols-2 md:gap-12 md:py-20"
    >
      <div className="max-w-xl">
        <p className="mb-5 text-xs font-semibold tracking-[3px] text-[#7898a5]">
          DISCOVER COZYCART
        </p>

        <h1 className="text-5xl font-semibold leading-tight tracking-tight text-[#252a30] md:text-6xl lg:text-7xl">
          A little more
          <br />
          <span className="font-serif font-normal italic text-[#7898a5]">
            style.
          </span>
          Every day.
        </h1>

        <p className="mt-6 max-w-md text-base leading-7 text-[#73777b]">
          From everyday outfits to fragrances and accessories,
          discover the things that make your style yours.
        </p>

        <a
          href="#shop"
          className="mt-8 inline-flex items-center gap-4 bg-[#252a30] px-7 py-4 text-sm font-medium text-white transition-colors hover:bg-[#526d78]"
        >
          Explore Collection <span>→</span>
        </a>
      </div>

      <div className="h-[320px] overflow-hidden bg-[#dceaf0] sm:h-[420px] md:h-[480px]">
       
<img
  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=85"
  alt="Fashion shopping and modern style"
  className="h-full w-full object-cover object-center"
/>

      </div>
    </section>
  );
}

export default Hero;
