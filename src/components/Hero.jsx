import styles from "../style";
import { robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} pt-28 md:pt-32`}
    >
      {/* Left Content */}
      <div
        className={`flex-1 ${styles.flexStart} !justify-start flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* Badge */}
        <div className="flex flex-row items-center py-2 px-4 bg-discount-gradient rounded-full mb-6 border border-white/10 gap-2">
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          <p className="font-poppins font-medium text-[13px] text-dimWhite">
            Trusted by businesses{" "}
            <span className="text-white font-semibold">worldwide</span>
          </p>
        </div>

        {/* Heading */}
        <div className="hero-text-1">
          <h1 className="font-poppins font-bold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[72px]">
            <span className="text-gradient">Global</span>
          </h1>
        </div>
        <div className="hero-text-2">
          <h1 className="font-poppins font-bold ss:text-[68px] text-[52px] text-white ss:leading-[96px] leading-[72px] w-full">
            Connection.
          </h1>
        </div>

        <div className="hero-text-3">
          <p className={`${styles.paragraph} mt-6 max-w-[500px] leading-relaxed`}>
            At <span className="text-white font-semibold">Glory Impact (M) SDN BHD</span>, we are driven by a passion for building bridges between ideas, markets, and people. A multifaceted global company specializing in innovative solutions that connect businesses to the world.
          </p>

          <div className="flex flex-row items-center gap-4 mt-8">
            <a href="#services">
              <button className="btn-primary py-3.5 px-8 font-poppins font-semibold text-[16px] text-primary bg-blue-gradient rounded-xl outline-none">
                Explore Services
              </button>
            </a>
            <a href="#products" className="font-poppins font-medium text-[16px] text-dimWhite hover:text-white transition-colors duration-200 flex items-center gap-2 group">
              View Products
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative hero-image`}
      >
        <div className="hero-float w-full h-full flex items-center justify-center">
          <img
            src={robot}
            alt="globe"
            className="w-[100%] h-[100%] relative z-[5] drop-shadow-2xl"
          />
        </div>

        {/* Gradient blobs */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>
    </section>
  );
};

export default Hero;
