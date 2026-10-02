import { useRef } from "react";
import { ArrowRight, Handshake, Factory, Truck, Storefront } from "@phosphor-icons/react";
import { gsap, SplitText, useGSAP, MOTION } from "../lib/gsap";
import { scrollToHash } from "../lib/useSmoothScroll";
import { CONTACT_LABEL, countries } from "../constants";
import earth from "../assets/stock/earth-night.webp";

const steps = [
  { Icon: Handshake, title: "Source", note: "Vetted suppliers" },
  { Icon: Factory, title: "Manufacture", note: "Made to your spec" },
  { Icon: Truck, title: "Ship", note: "Border to border" },
  { Icon: Storefront, title: "Retail", note: "On the shelf" },
];

const Hero = () => {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MOTION, () => {
        const q = gsap.utils.selector(root);

        // Load-in: background settles, headline lines rise out of a mask, glass panels float in.
        const intro = gsap.timeline({ defaults: { ease: "power4.out" } });
        intro
          .from(q("[data-bg]"), { scale: 1.3, autoAlpha: 0, duration: 2.2, ease: "power2.out" })
          .from(q("[data-fade]"), { y: 24, autoAlpha: 0, stagger: 0.12, duration: 1 }, 0.9)
          .from(q("[data-glass]"), { y: 60, autoAlpha: 0, stagger: 0.18, duration: 1.5 }, 0.7)
          .from(q("[data-step]"), { x: 16, autoAlpha: 0, stagger: 0.12, duration: 0.9 }, 1.3)
          .from(q("[data-route]"), { scaleY: 0, transformOrigin: "top", duration: 1.2, ease: "power2.inOut" }, 1.3);

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
          .to(q("[data-wrap='main']"), { yPercent: -25 }, 0)
          .to(q("[data-wrap='countries']"), { yPercent: -60 }, 0)
          .to(q("[data-wrap='sold']"), { yPercent: -110 }, 0);

        // Pointer depth on devices that have a fine pointer.
        const fine = window.matchMedia("(pointer: fine)").matches;
        if (!fine) return () => split.revert();

        const planes = [
          { el: q("[data-bg]")[0], depth: -12 },
          { el: q("[data-depth='main']")[0], depth: 18 },
          { el: q("[data-depth='countries']")[0], depth: 34 },
          { el: q("[data-depth='sold']")[0], depth: 52 },
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

      {/* Planes 2 to 4: glass panels floating over the world, each at its own depth */}
      <div className="pointer-events-none absolute inset-0 -z-[5] hidden lg:block" aria-hidden="true">
        <div data-wrap="main" className="absolute right-[8%] top-[19%] w-[min(25vw,360px)]">
          <div data-depth="main">
            <div data-glass className="glass rounded-2xl p-6">
              <p className="text-sm text-ink/70">From factory to shelf</p>
              <ol className="relative mt-5 flex flex-col gap-5">
                <span data-route className="absolute bottom-5 left-[19px] top-5 w-px bg-gradient-to-b from-accent/80 to-ink/10" />
                {steps.map(({ Icon, title, note }) => (
                  <li key={title} data-step className="relative flex items-center gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20 bg-canvas/60 text-ink">
                      <Icon size={18} />
                    </span>
                    <span>
                      <span className="block font-medium leading-tight">{title}</span>
                      <span className="block text-sm text-ink/60">{note}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div data-wrap="countries" className="absolute bottom-[11%] right-[3%] w-[min(22vw,320px)]">
          <div data-depth="countries">
            <div data-glass className="glass rounded-2xl p-5">
              <p className="text-sm text-ink/70">Active in</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {countries.map((c) => (
                  <li key={c} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm">
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div data-wrap="sold" className="absolute bottom-[26%] right-[33%]">
          <div data-depth="sold">
            <div data-glass className="glass rounded-2xl px-5 py-4">
              <p className="display text-4xl leading-none">
                1M<span className="text-accent">+</span>
              </p>
              <p className="mt-1 text-sm text-ink/70">Products sold</p>
            </div>
          </div>
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
