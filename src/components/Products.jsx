import { useRef, useState } from "react";
import { ArrowUpRight } from "@phosphor-icons/react";
import { gsap, useGSAP, MOTION, DESKTOP } from "../lib/gsap";
import { scrollToY } from "../lib/useSmoothScroll";
import { products } from "../constants";

// Timeline spacing for the shelf: a hold on each product, then a hand-off.
const HOLD = 0.3;
const STEP = 1.4;
const handoffAt = (i) => (i - 1) * STEP + HOLD;

const Products = () => {
  const root = useRef(null);
  const trigger = useRef(null);
  const [active, setActive] = useState(0);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop: the shelf. The section pins and each product hands over to the next as you scroll.
      mm.add(DESKTOP, () => {
        const slides = gsap.utils.toArray("[data-slide]", root.current);
        const part = (slide, name) => slide.querySelector(`[data-${name}]`);
        const last = slides.length - 1;

        slides.slice(1).forEach((s) => {
          gsap.set(part(s, "img"), { yPercent: 45, rotate: 10, scale: 0.86, autoAlpha: 0 });
          gsap.set(part(s, "copy"), { y: 50, autoAlpha: 0 });
          gsap.set(part(s, "glow"), { autoAlpha: 0, scale: 0.7 });
        });

        const tl = gsap.timeline({
          defaults: { ease: "power2.inOut", duration: 1 },
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${window.innerHeight * 1.1 * last}`,
            pin: true,
            scrub: 0.7,
            onUpdate: () => {
              const i = gsap.utils.clamp(0, last, Math.floor((tl.time() - HOLD - 0.4) / STEP) + 1);
              setActive((prev) => (prev === i ? prev : i));
            },
          },
        });
        trigger.current = tl.scrollTrigger;

        // Each hand-off: the current product leaves, then the next one arrives and holds.
        for (let i = 1; i <= last; i++) {
          const prev = slides[i - 1];
          const next = slides[i];
          const at = handoffAt(i);
          tl.to(part(prev, "img"), { yPercent: -40, rotate: -10, scale: 0.8, autoAlpha: 0, duration: 0.55 }, at)
            .to(part(prev, "copy"), { y: -50, autoAlpha: 0, duration: 0.45 }, at)
            .to(part(prev, "glow"), { autoAlpha: 0, scale: 1.3, duration: 0.55 }, at)
            .to(part(next, "img"), { yPercent: 0, rotate: 0, scale: 1, autoAlpha: 1, duration: 0.75 }, at + 0.35)
            .to(part(next, "copy"), { y: 0, autoAlpha: 1, duration: 0.6 }, at + 0.45)
            .to(part(next, "glow"), { autoAlpha: 1, scale: 1, duration: 0.75 }, at + 0.3);
        }
        tl.to({}, { duration: HOLD });

        // Signature: the product turns toward the pointer, like picking it up off the shelf.
        const tilts = gsap.utils.toArray("[data-tilt]", root.current).map((el) => ({
          rx: gsap.quickTo(el, "rotationX", { duration: 0.8, ease: "power3.out" }),
          ry: gsap.quickTo(el, "rotationY", { duration: 0.8, ease: "power3.out" }),
          x: gsap.quickTo(el, "x", { duration: 0.8, ease: "power3.out" }),
        }));
        const stage = root.current;
        const onMove = (e) => {
          const r = stage.getBoundingClientRect();
          const nx = (e.clientX - r.left) / r.width - 0.5;
          const ny = (e.clientY - r.top) / r.height - 0.5;
          tilts.forEach((t) => {
            t.ry(nx * 28);
            t.rx(-ny * 18);
            t.x(nx * 30);
          });
        };
        const onLeave = () => tilts.forEach((t) => (t.rx(0), t.ry(0), t.x(0)));
        stage.addEventListener("pointermove", onMove);
        stage.addEventListener("pointerleave", onLeave);

        return () => {
          stage.removeEventListener("pointermove", onMove);
          stage.removeEventListener("pointerleave", onLeave);
          trigger.current = null;
          setActive(0);
        };
      });

      // Smaller screens: products stack, each one lifting into place.
      mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray("[data-slide]", root.current).forEach((s) => {
          gsap.from(s.querySelector("[data-img]"), {
            yPercent: 20,
            rotate: 6,
            autoAlpha: 0,
            duration: 1.2,
            scrollTrigger: { trigger: s, start: "top 80%" },
          });
          gsap.from(s.querySelector("[data-copy]"), {
            y: 30,
            autoAlpha: 0,
            scrollTrigger: { trigger: s, start: "top 70%" },
          });
        });
      });

      mm.add(MOTION, () => {
        gsap.from("[data-heading]", { y: 24, autoAlpha: 0, scrollTrigger: { trigger: root.current, start: "top 80%" } });
      });
    },
    { scope: root }
  );

  const jump = (i) => {
    const st = trigger.current;
    if (!st) return;
    const tl = st.animation;
    const time = i === 0 ? 0 : handoffAt(i) + 1.1;
    scrollToY(st.start + (st.end - st.start) * (time / tl.duration()));
  };

  return (
    <section
      id="products"
      ref={root}
      aria-labelledby="products-title"
      className="relative py-24 lg:motion-safe:h-screen lg:motion-safe:overflow-hidden lg:motion-safe:py-0"
    >
      <div className="page-x relative lg:motion-safe:h-full">
        <h2
          id="products-title"
          data-heading
          className="display text-4xl sm:text-5xl lg:motion-safe:absolute lg:motion-safe:left-12 lg:motion-safe:top-24 lg:motion-safe:z-10 lg:motion-safe:text-[2rem] lg:motion-safe:font-medium lg:motion-safe:tracking-tight lg:motion-safe:text-mute"
        >
          Products we make and move
        </h2>

        <div className="mt-12 flex flex-col gap-24 lg:motion-safe:mt-0 lg:motion-safe:block lg:motion-safe:h-full">
          {products.map((p) => (
            <article
              key={p.id}
              data-slide
              className="relative grid items-center gap-8 lg:motion-reduce:grid-cols-2 lg:motion-reduce:gap-16 lg:motion-safe:absolute lg:motion-safe:inset-0 lg:motion-safe:grid-cols-12 lg:motion-safe:gap-0 lg:motion-safe:px-12"
            >
              <div data-copy className="order-2 lg:motion-safe:order-1 lg:motion-safe:col-span-5 lg:motion-safe:pt-16">
                <h3 className="display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">{p.name}</h3>
                <p className="lede mt-5 max-w-[36ch]">{p.line}</p>
                {p.doc ? (
                  <a
                    href={p.doc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost group mt-8"
                  >
                    Product sheet
                    <ArrowUpRight size={16} className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ) : null}
              </div>

              <div className="relative order-1 flex aspect-square items-center justify-center lg:motion-safe:order-2 lg:motion-safe:col-span-6 lg:motion-safe:col-start-7 lg:motion-safe:aspect-auto lg:motion-safe:h-[78vh] [perspective:1200px]">
                <div
                  data-glow
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 aspect-square w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
                  style={{ background: `radial-gradient(circle, ${p.glow} 0%, transparent 65%)` }}
                />
                <div data-tilt className="relative h-full w-full [transform-style:preserve-3d]">
                  <img
                    data-img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="absolute inset-0 m-auto max-h-[82%] max-w-[78%] object-contain drop-shadow-[0_40px_50px_rgba(0,0,0,0.55)]"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>

        <ol className="absolute bottom-12 left-12 z-10 hidden gap-6 lg:motion-safe:flex" aria-label="Jump to product">
          {products.map((p, i) => (
            <li key={p.id}>
              <button
                type="button"
                onClick={() => jump(i)}
                aria-current={active === i ? "true" : undefined}
                className={`group flex flex-col items-start gap-2 text-left text-sm transition-colors duration-300 ${
                  active === i ? "text-ink" : "text-mute hover:text-ink"
                }`}
              >
                <span
                  className={`h-px w-16 origin-left bg-current transition-transform duration-500 ${
                    active === i ? "scale-x-100" : "scale-x-50"
                  }`}
                />
                <span className="max-w-[14ch]">{p.name}</span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Products;
