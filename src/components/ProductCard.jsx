const ProductCard = ({ productName, productImage, productDescription }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 product-card">
    <img src={productImage} alt={productName} className="w-full h-[200px] object-cover rounded-t-[20px]" />
    <div className="flex flex-col mt-5">
      <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white text-center">
        {productName}
      </h4>
      {productDescription ? (
        <a
          href={productDescription}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex justify-center"
        >
          <button className="py-2 px-6 font-poppins font-medium text-[16px] text-primary bg-blue-gradient rounded-[10px] outline-none">
            See More
          </button>
        </a>
      ) : null}
    </div>
  </div>
);

export default ProductCard;
