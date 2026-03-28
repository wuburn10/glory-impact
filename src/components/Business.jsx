import { features } from "../constants";
import styles, { layout } from "../style";

const iconMap = {
  "feature-1": (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-secondary">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
  "feature-2": (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-secondary">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  ),
  "feature-3": (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-secondary">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
    </svg>
  ),
};

const FeatureCard = ({ id, icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-2xl feature-card cursor-default ${
      index !== features.length - 1 ? "mb-5" : "mb-0"
    }`}
  >
    <div className={`w-[60px] h-[60px] shrink-0 rounded-xl ${styles.flexCenter} bg-gradient-to-br from-cyan-500/15 to-blue-600/15 border border-white/10`}>
      {iconMap[id] || <img src={icon} alt={title} className="w-[55%] h-[55%] object-contain" />}
    </div>
    <div className="flex-1 flex flex-col ml-4">
      <h4 className="font-poppins font-semibold text-white text-[17px] leading-[24px] mb-2">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[15px] leading-[26px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="services" className={layout.section}>
    <div className={layout.sectionInfo}>
      <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-discount-gradient rounded-full border border-white/10 mb-5">
        <span className="text-gradient text-[13px] font-semibold font-poppins uppercase tracking-wider">Our Services</span>
      </div>
      <h2 className={styles.heading2}>
        You focus on growth,{" "}
        <br className="sm:block hidden" />
        we'll handle the rest.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 leading-relaxed`}>
        From global trading and contract manufacturing to web development and
        retail supply chain solutions — Glory Impact (M) SDN BHD is your
        trusted partner in delivering seamless, end-to-end business support
        across the globe.
      </p>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
