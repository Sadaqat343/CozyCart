function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex min-h-[80px] items-center justify-between gap-6 border-b border-[#eae7e1] bg-white px-[7%] py-[15px] max-md:flex-wrap max-md:px-[5%]">
      <a
        href="#home"
        className="text-[27px] font-extrabold tracking-[-1.5px] text-[#252a30]"
      >
        Cozy<span className="text-[#7898a5]">Cart</span>
      </a>

      <nav className="flex items-center gap-[30px] max-md:order-3 max-md:w-full max-md:flex-wrap max-md:justify-center max-md:gap-[18px]">
        <a href="#home" className="text-[13px] text-[#484b4e] transition-colors hover:text-[#7898a5]">Home</a>
        <a href="#categories" className="text-[13px] text-[#484b4e] transition-colors hover:text-[#7898a5]">Categories</a>
        <a href="#shop" className="text-[13px] text-[#484b4e] transition-colors hover:text-[#7898a5]">Shop</a>
        <a href="#about" className="text-[13px] text-[#484b4e] transition-colors hover:text-[#7898a5]">About</a>
      </nav>

      <a
        href="#shop"
        className="border border-[#e4e0d8] px-[15px] py-[10px] text-[12px] text-[#252a30]"
      >
        Bag <span className="ml-2 font-bold">0</span>
      </a>
    </header>
  );
}

export default Navbar;
