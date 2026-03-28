import { card } from "../assets";
import styles, { layout } from "../style";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-discount-gradient rounded-full border border-white/10 mb-5">
        <span className="text-gradient text-[13px] font-semibold font-poppins uppercase tracking-wider">Global Reach</span>
      </div>
      <h2 className={styles.heading2}>
        Take your products{" "}
        <br className="sm:block hidden" />
        to the world.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 leading-relaxed`}>
        Launch, scale, and distribute your products globally with our expert
        services in trading, merchandising, and e-commerce. We connect you with
        the right markets in just a few easy steps.
      </p>

      <div className="flex items-center gap-4 mt-8">
        <div className="flex -space-x-2">
          {["🇲🇾", "🇸🇬", "🇮🇩", "🇹🇭"].map((flag, i) => (
            <div key={i} className="w-9 h-9 rounded-full bg-discount-gradient border border-white/20 flex items-center justify-center text-[16px]">
              {flag}
            </div>
          ))}
        </div>
        <p className="font-poppins text-[14px] text-dimWhite">
          Active in <span className="text-white font-semibold">4+ countries</span>
        </p>
      </div>
    </div>

    <div className={layout.sectionImg}>
      <div className="relative w-full h-full">
        <img
          src={card}
          alt="global distribution"
          className="w-[100%] h-[100%] rounded-2xl"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5" />
      </div>
    </div>
  </section>
);

export default CardDeal;
