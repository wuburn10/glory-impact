import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 relative`}>
    {/* Subtle divider above */}
    <div className="section-divider w-full mb-10" />

    <div className="flex flex-row flex-wrap justify-center w-full gap-2">
      {stats.map((stat, index) => (
        <div
          key={stat.id}
          className={`stat-item flex-1 flex flex-col justify-center items-center px-6 py-6 rounded-2xl glass-card min-w-[140px] mx-2`}
        >
          <h4 className="font-poppins font-bold xs:text-[44px] text-[34px] xs:leading-[55px] leading-[44px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[14px] text-[13px] text-gradient uppercase tracking-widest mt-1 text-center">
            {stat.title}
          </p>
        </div>
      ))}
    </div>

    {/* Subtle divider below */}
    <div className="section-divider w-full mt-10" />
  </section>
);

export default Stats;
