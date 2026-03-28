import { bill } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <div className="relative w-full h-full">
        <img
          src={bill}
          alt="global operations"
          className="w-[100%] h-[100%] relative z-[5] rounded-2xl"
        />
        {/* Decorative ring */}
        <div className="absolute -inset-3 rounded-2xl border border-white/5 z-[4]" />
      </div>

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-discount-gradient rounded-full border border-white/10 mb-5">
        <span className="text-gradient text-[13px] font-semibold font-poppins uppercase tracking-wider">Supply Chain</span>
      </div>
      <h2 className={styles.heading2}>
        Simplify your{" "}
        <br className="sm:block hidden" />
        global operations.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 leading-relaxed`}>
        From sourcing and manufacturing to logistics and retail supply — manage
        your entire supply chain through one trusted partner. We make
        international business smooth, efficient, and scalable.
      </p>

      <div className="flex flex-col gap-3 mt-8">
        {["Quality sourcing & manufacturing", "End-to-end logistics support", "Scalable retail solutions"].map((item) => (
          <div key={item} className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-blue-gradient flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 h-3 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <span className="font-poppins text-[15px] text-dimWhite">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Billing;
