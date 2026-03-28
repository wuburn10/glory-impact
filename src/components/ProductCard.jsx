const ProductCard = ({ productName, productImage, productDescription }) => (
  <div className="product-card flex flex-col rounded-2xl max-w-[340px] md:mr-8 sm:mr-5 mr-0 my-5 overflow-hidden">
    {/* Image container with fixed aspect ratio */}
    <div className="relative w-full overflow-hidden" style={{ height: "220px" }}>
      <img
        src={productImage}
        alt={productName}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
    </div>

    {/* Card body */}
    <div className="flex flex-col px-7 py-6">
      <h4 className="font-poppins font-semibold text-[17px] leading-[26px] text-white">
        {productName}
      </h4>

      {productDescription ? (
        <a
          href={productDescription}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block"
        >
          <button className="btn-primary py-2.5 px-6 font-poppins font-semibold text-[14px] text-primary bg-blue-gradient rounded-xl outline-none flex items-center gap-2">
            View Details
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </button>
        </a>
      ) : (
        <p className="mt-3 font-poppins text-[13px] text-dimWhite/60 italic">Product info coming soon</p>
      )}
    </div>
  </div>
);

export default ProductCard;
