import { useRef } from "react";
import { gsap, SplitText, useGSAP, MOTION, DESKTOP } from "../lib/gsap";

const Manifesto = () => {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      const text = root.current.querySelector("[data-words]");

      // The statement is read under the visitor's own scroll: each word lights as they reach it.
      mm.add(MOTION, () => {
        const split = SplitText.create(text, { type: "words" });
        gsap.set(split.words, { opacity: 0.16 });
        return () => split.revert();
      });

      mm.add(DESKTOP, () => {
        const words = text.querySelectorAll("div");
        gsap.to(words, {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: "+=140%", scrub: 0.6, pin: true },
        });
      });

      mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
        const words = text.querySelectorAll("div");
        gsap.to(words, {
          opacity: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: { trigger: text, start: "top 80%", end: "bottom 45%", scrub: 0.6 },
        });
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} aria-label="About Glory Impact" className="flex min-h-screen items-center py-24 lg:py-0">
      <div className="page-x">
        <p
          data-words
          className="display max-w-[22ch] text-[2rem] leading-[1.15] sm:text-5xl sm:leading-[1.1] lg:max-w-[24ch] lg:text-[3.75rem]"
        >
          We build bridges between ideas, markets and people. One partner for sourcing, making and moving, so you can
          spend your time on growth.
        </p>
        <p className="lede mt-10 max-w-[52ch]">
          Glory Impact (M) SDN BHD is a Malaysian trading and product company. We work with brands, distributors and
          retailers who want a single, accountable team between the factory and the customer.
        </p>
      </div>
    </section>
  );
};

export default Manifesto;
