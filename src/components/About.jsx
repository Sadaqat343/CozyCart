
function About() {
  return (
    <section
      id="about"
      className="bg-[#dceaf0] px-5 py-[75px] text-center"
    >
      <p className="mb-[17px] text-[10px] font-bold tracking-[2px] text-[#7898a5]">
        A WARMER WAY TO SHOP
      </p>

      <h2 className="mb-5 text-[clamp(32px,4vw,45px)] leading-[1.15] tracking-[-1.5px]">
        Comfort first.
        <br />
        Style always.
      </h2>

      <p className="mx-auto mb-5 max-w-[470px] text-[13px] leading-[1.9] text-[#626b6e]">
        CozyCart brings winter favorites together in one place, making it
        easier to find something warm for everyone.
      </p>

      <a
        href="#shop"
        className="text-[12px] text-[#252a30] underline underline-offset-[5px]"
      >
        Discover our collection ↗
      </a>
    </section>
  );
}

export default About;
