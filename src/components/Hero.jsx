import { useRef } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { gsap, SplitText, useGSAP, MOTION } from "../lib/gsap";
import { scrollToHash } from "../lib/useSmoothScroll";
import { CONTACT_LABEL, products } from "../constants";
import earth from "../assets/stock/earth-night.webp";

const perfume = products[0];
const cream = products[1];

const Hero = () => {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MOTION, () => {
        const q = gsap.utils.selector(root);

        // Load-in: background settles, headline lines rise out of a mask, product lands.
        const intro = gsap.timeline({ defaults: { ease: "power4.out" } });
        intro
          .from(q("[data-bg]"), { scale: 1.3, autoAlpha: 0, duration: 2.2, ease: "power2.out" })
          .from(q("[data-fade]"), { y: 24, autoAlpha: 0, stagger: 0.12, duration: 1 }, 0.9)
          .from(q("[data-prod='back']"), { yPercent: 40, autoAlpha: 0, rotate: -14, duration: 1.6 }, 0.6)
          .from(q("[data-prod='front']"), { yPercent: 60, autoAlpha: 0, rotate: 10, duration: 1.8 }, 0.75);

        const split = SplitText.create(q("h1"), {
          type: "lines",
          mask: "lines",
          linesClass: "split-line",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.lines, { yPercent: 110, stagger: 0.1, duration: 1.3, ease: "power4.out", delay: 0.45 }),
        });

        // Scroll: each plane leaves at its own rate, which is where the depth comes from.
        const out = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
        });
        out
          .to(q("[data-bg-wrap]"), { yPercent: 22, scale: 1.08 }, 0)
          .to(q("[data-copy]"), { yPercent: -30, autoAlpha: 0 }, 0)
          .to(q("[data-prod-wrap='back']"), { yPercent: -35, rotate: -6 }, 0)
          .to(q("[data-prod-wrap='front']"), { yPercent: -70, rotate: 5 }, 0);

        // Pointer depth on devices that have a fine pointer.
        const fine = window.matchMedia("(pointer: fine)").matches;
        if (!fine) return () => split.revert();

        const planes = [
          { el: q("[data-bg]")[0], depth: -12 },
          { el: q("[data-prod='back']")[0], depth: 18 },
          { el: q("[data-prod='front']")[0], depth: 36 },
        ].map((p) => ({
          x: gsap.quickTo(p.el, "x", { duration: 1.2, ease: "power3.out" }),
          y: gsap.quickTo(p.el, "y", { duration: 1.2, ease: "power3.out" }),
          depth: p.depth,
        }));

        const onMove = (e) => {
          const nx = e.clientX / window.innerWidth - 0.5;
          const ny = e.clientY / window.innerHeight - 0.5;
          planes.forEach((p) => {
            p.x(nx * p.depth);
            p.y(ny * p.depth);
          });
        };
        window.addEventListener("pointermove", onMove);
        return () => {
          window.removeEventListener("pointermove", onMove);
          split.revert();
        };
      });
    },
    { scope: root }
  );

  const go = (hash) => (e) => {
    e.preventDefault();
    scrollToHash(hash);
  };

  return (
    <section
      id="home"
      ref={root}
      className="relative isolate flex min-h-[640px] h-[100svh] items-end overflow-hidden pb-16 sm:pb-20 lg:items-center lg:pb-0"
    >
      {/* Plane 1: the world */}
      <div data-bg-wrap className="absolute inset-0 -z-20">
        <img
          data-bg
          src={earth}
          alt=""
          className="h-full w-full scale-110 object-cover object-[60%_50%]"
          fetchpriority="high"
        />
      </div>
      {/* Scrim only where the copy sits */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(11,13,18,0.95)_0%,rgba(11,13,18,0.8)_35%,rgba(11,13,18,0.35)_58%,rgba(11,13,18,0)_78%)] max-lg:bg-[linear-gradient(0deg,rgba(11,13,18,0.96)_15%,rgba(11,13,18,0.35)_60%,rgba(11,13,18,0.1)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-canvas to-transparent" />

      {/* Planes 2 and 3: products, between the world and the viewer */}
      <div className="pointer-events-none absolute inset-0 -z-[5]">
        <div
          data-prod-wrap="back"
          className="absolute right-[24%] top-[24%] hidden w-[17vw] max-w-[260px] lg:block"
        >
          <img
            data-prod="back"
            src={cream.img}
            alt=""
            className="w-full -rotate-12 drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)]"
          />
        </div>
        <div
          data-prod-wrap="front"
          className="absolute right-[-6%] top-[8%] w-[62vw] max-w-[300px] sm:right-[4%] sm:max-w-[340px] lg:right-[6%] lg:top-auto lg:bottom-[10%] lg:w-[30vw] lg:max-w-[460px]"
        >
          <img
            data-prod="front"
            src={perfume.img}
            alt=""
            className="w-full rotate-6 drop-shadow-[0_50px_60px_rgba(0,0,0,0.65)]"
          />
        </div>
      </div>

      <div className="page-x">
        <div data-copy className="max-w-[640px] lg:max-w-[720px]">
          <h1 className="display text-[2.75rem] leading-[1.02] sm:text-6xl lg:text-7xl">
            Global connection for products that travel.
          </h1>
          <p data-fade className="lede mt-6 max-w-[46ch] text-ink/75">
            We source, manufacture and distribute consumer products across Southeast Asia, from first sample to retail
            shelf.
          </p>
          <div data-fade className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#contact" onClick={go("#contact")} className="btn-primary">
              {CONTACT_LABEL}
            </a>
            <a href="#products" onClick={go("#products")} className="btn-ghost group">
              See products
              <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
