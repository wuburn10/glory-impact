import styles from "../style";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-3xl cta-glow relative overflow-hidden`}
    style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(92,225,230,0.06) 50%, rgba(33,77,118,0.08) 100%)", border: "1px solid rgba(255,255,255,0.1)" }}
  >
    {/* Background glow orb */}
    <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />
    <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />

    {/* Left content */}
    <div className="flex-1 flex flex-col relative z-10 pt-10" id="contact-us">
      <div className="inline-flex items-center gap-2 py-1.5 px-4 bg-discount-gradient rounded-full border border-white/10 mb-5 self-start">
        <span className="text-gradient text-[13px] font-semibold font-poppins uppercase tracking-wider">Contact Us</span>
      </div>
      <h2 className={styles.heading2}>
        Ready to grow <br className="sm:block hidden" />
        with us?
      </h2>

      <div className="mt-8 flex flex-col gap-0">
        {/* Contact person */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-gradient flex items-center justify-center shrink-0 text-primary font-bold font-poppins text-[18px]">
            M
          </div>
          <div>
            <p className="font-poppins font-bold text-white text-[16px]">M. Suppiah</p>
            <p className="font-poppins text-dimWhite text-[14px]">Managing Director</p>
          </div>
        </div>

        {/* Contact details */}
        <div className="flex flex-col gap-3">
          <a href="tel:+60162440677" className="contact-item group">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-secondary shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <span className="font-poppins text-[15px] text-dimWhite group-hover:text-secondary transition-colors">+(6)016-2440 677</span>
          </a>
          <a href="mailto:gloryimpact238@gmail.com" className="contact-item group">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-secondary shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
            <span className="font-poppins text-[15px] text-dimWhite group-hover:text-secondary transition-colors">gloryimpact238@gmail.com</span>
          </a>
          <div className="contact-item">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-secondary shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <span className="font-poppins text-[15px] text-dimWhite">8 Avenua Business Center, A-3-9 Jalan 8/1, 46000 Petaling Jaya, Selangor</span>
          </div>
        </div>
      </div>
    </div>

    {/* Right CTA */}
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 relative z-10`}>
      <div className="flex flex-col items-center gap-4">
        <a href="mailto:gloryimpact238@gmail.com">
          <button className="btn-primary py-4 px-10 font-poppins font-semibold text-[17px] text-primary bg-blue-gradient rounded-2xl outline-none whitespace-nowrap">
            Get in Touch
          </button>
        </a>
        <a
          href="tel:+60162440677"
          className="font-poppins text-[14px] text-dimWhite hover:text-secondary transition-colors flex items-center gap-1"
        >
          Or call us directly →
        </a>
      </div>
    </div>
  </section>
);

export default CTA;
