import { products } from "../constants";
import styles from "../style";
import ProductCard from "./ProductCard";

const Products = () => (
  <section id="products" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-start md:flex-row flex-col sm:mb-12 mb-6 relative z-[1] gap-6">
      <div>
        <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-discount-gradient rounded-full border border-white/10 mb-5">
          <span className="text-gradient text-[13px] font-semibold font-poppins uppercase tracking-wider">What We Offer</span>
        </div>
        <h2 className={styles.heading2}>
          Explore Our{" "}
          <br className="sm:block hidden" />
          Products
        </h2>
      </div>
      <div className="md:max-w-[420px] w-full md:text-right md:pt-4">
        <p className={`${styles.paragraph} leading-relaxed`}>
          Discover how our innovative products have helped businesses streamline
          operations, enhance customer experiences, and achieve remarkable growth.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap justify-center w-full feedback-container relative z-[1] gap-2">
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
