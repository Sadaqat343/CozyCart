
function Footer() {
  return (
    <footer className="bg-[#252a30] px-5 pb-[25px] pt-10 text-center text-white">
      <a
        href="#home"
        className="text-[27px] font-extrabold tracking-[-1.5px] text-white"
      >
        Cozy<span className="text-[#7898a5]">Cart</span>
      </a>

      <p className="mb-[22px] mt-2 text-[12px] text-[#d2d4d5]">
        Stay warm, shop easy.
      </p>

      <small className="text-[11px] text-[#bfc2c4]">
        © {new Date().getFullYear()} CozyCart. All rights reserved.
      </small>
    </footer>
  );
}

export default Footer;
