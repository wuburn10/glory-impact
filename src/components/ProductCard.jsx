const ProductCard = ({ productName, productImage, productDescription }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 product-card">
    <img src={productImage} alt={productName} className="w-full h-[200px] object-cover rounded-t-[20px]" />
    <div className="flex flex-col mt-5">
      <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white text-center">
        {productName}
      </h4>
      <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite mt-3 text-center">
        {productDescription}
      </p>
    </div>
  </div>
);

export default ProductCard;
