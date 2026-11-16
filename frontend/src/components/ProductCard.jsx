
function ProductCard({ product }) {
  return (
    <article className="min-w-0 overflow-hidden rounded-xl border border-[#eeeae4] bg-white transition duration-300 hover:-translate-y-[5px] hover:shadow-[0_12px_28px_rgba(37,42,48,0.1)]">
      <div className="relative h-[270px] overflow-hidden bg-[#f5f0e8] max-[1000px]:h-[300px] max-[520px]:h-[190px]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.04]"
        />

        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-[10px] py-[6px] text-[11px] text-[#252a30]">
          {product.category}
        </span>
      </div>

      <div className="p-[18px_16px] max-[520px]:p-3">
        <h3 className="mb-4 text-[16px] font-semibold leading-[1.4] max-[520px]:text-[14px]">
          {product.name}
        </h3>

        <div className="flex items-center justify-between gap-2 max-[520px]:flex-col max-[520px]:items-start">
          <p className="m-0 text-[14px] font-bold">
            Rs. {product.price.toLocaleString('en-PK')}
          </p>

          <button
            type="button"
            onClick={() =>
              window.alert(
                `${product.name} selected! Shopping cart coming next.`
              )
            }
            className="rounded-md bg-[#252a30] px-3 py-[9px] text-[12px] text-white transition-colors hover:bg-[#526a77]"
          >
            View item
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
