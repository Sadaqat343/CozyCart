
function Hero() {
  return (
    <section
      id="home"
      className="grid grid-cols-[0.9fr_1.1fr] items-center gap-[6%] bg-[#f5f0e8] px-[7%] py-[65px] max-md:grid-cols-1 max-md:gap-[30px] max-md:px-[6%] max-md:py-[45px]"
    >
      <div className="py-[15px]">
        <p className="mb-[17px] text-[10px] font-bold tracking-[2px] text-[#7898a5]">
          THE WINTER COLLECTION
        </p>

        <h1 className="text-[clamp(48px,6vw,78px)] font-bold leading-[1.04] tracking-[-4px] max-[480px]:text-[53px] max-[480px]:tracking-[-2px]">
          Find your
          <br />
          kind of{' '}
          <span className="font-serif font-normal italic text-[#7898a5]">
            cozy.
          </span>
        </h1>

        <p className="mb-[30px] mt-6 max-w-[390px] text-[14px] leading-[1.9] text-[#6c6d6d]">
          Discover timeless winter essentials for men, women and little ones.
          Comfort has never looked this good.
        </p>

        <a
          href="#shop"
          className="inline-flex items-center gap-[25px] bg-[#252a30] px-[21px] py-[15px] text-[12px] text-white transition-colors hover:bg-[#526d78]"
        >
          Explore Collection <span>↗</span>
        </a>

        <div className="mt-[45px] flex items-center gap-3">
          <span className="h-px w-[30px] bg-[#7898a5]" />
          <p className="text-[11px] text-[#777a7d]">
            Made for the moments that feel like home.
          </p>
        </div>
      </div>

      <div className="relative h-[440px] bg-[#dceaf0] max-md:h-[360px] max-[480px]:h-[300px]">
        <img
          src="https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=1000&q=85"
          alt="Winter fashion inspiration"
          className="h-full w-full object-cover"
        />

        <div className="absolute bottom-[22px] left-[-22px] flex flex-col gap-[5px] bg-white px-[21px] py-[17px] shadow-[0_5px_25px_#0000000a] max-md:left-3">
          <span className="text-[9px] tracking-[1.5px] text-[#777a7d]">
            THE SEASONAL EDIT
          </span>
          <strong className="text-[14px]">Warm layers. Better days.</strong>
        </div>

        <div className="absolute right-[15px] top-[15px] bg-white px-[10px] py-2 text-[10px]">
          01 — 03
        </div>
      </div>
    </section>
  );
}

export default Hero;
