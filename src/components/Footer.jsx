import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className="section-divider w-full mb-12" />

    <div className={`${styles.flexStart} md:flex-row flex-col mb-10 w-full gap-10`}>
      {/* Brand column */}
      <div className="flex-[1.2] flex flex-col justify-start">
        <img
          src={logo}
          alt="gloryimpact"
          className="w-[220px] h-[60px] object-contain"
        />
        <p className={`${styles.paragraph} mt-5 max-w-[280px] text-[14px] leading-[24px]`}>
          Building bridges between ideas, markets, and people — globally.
        </p>

        {/* Social icons */}
        <div className="flex flex-row mt-6 gap-4">
          {socialMedia.map((social) => (
            <button
              key={social.id}
              onClick={() => window.open(social.link)}
              className="w-9 h-9 rounded-full glass-card border border-white/10 flex items-center justify-center cursor-pointer hover:border-secondary/50 hover:bg-secondary/10 transition-all duration-300 group"
              aria-label={social.id}
            >
              <img
                src={social.icon}
                alt={social.id}
                className="w-[16px] h-[16px] object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Link columns */}
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap gap-y-8">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col min-w-[130px]`}>
            <h4 className="font-poppins font-semibold text-[15px] leading-[27px] text-white mb-4">
              {footerlink.title}
            </h4>
            <ul className="list-none flex flex-col gap-3">
              {footerlink.links.map((link) => (
                <li
                  key={link.name}
                  className="font-poppins font-normal text-[14px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer transition-colors duration-200"
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom bar */}
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-white/[0.08] gap-4">
      <p className="font-poppins font-normal text-[14px] text-dimWhite">
        Copyright © 2025 Glory Impact (M) SDN BHD. All Rights Reserved.
      </p>
      <p className="font-poppins font-normal text-[13px] text-dimWhite/50">
        Petaling Jaya, Selangor, Malaysia
      </p>
    </div>
  </section>
);

export default Footer;
