import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Take your products <br className="sm:block hidden" /> to the world.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Launch, scale, and distribute your products globally with our expert services in trading, merchandising, and e-commerce. We connect you with the right markets in just a few easy steps.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
