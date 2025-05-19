import { products } from "../constants";
import styles from "../style";
import ProductCard from "./ProductCard";

const Products = () => (
  <section id="products" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Explore Our <br className="sm:block hidden" /> Products
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          Discover how our innovative products have helped businesses streamline operations, enhance customer experiences, and achieve remarkable growth.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          productName={product.name} 
          productImage={product.img} 
          productDescription={product.description}
        />
      ))}
    </div>
  </section>
);

export default Products;
