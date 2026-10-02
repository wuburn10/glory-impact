import { useRef } from "react";
import { gsap, useGSAP, MOTION, DESKTOP } from "../lib/gsap";
import { services } from "../constants";

const Services = () => {
  const root = useRef(null);
  const track = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop: the section pins and the four services travel sideways under the scroll.
      mm.add(DESKTOP, () => {
        const panels = gsap.utils.toArray("[data-panel]", root.current);
        const distance = () => track.current.scrollWidth - window.innerWidth;

        const pan = gsap.to(track.current, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });

        // Each photo drifts inside its frame while its panel crosses the screen.
        panels.forEach((panel) => {
          gsap.fromTo(
            panel.querySelector("img"),
            { xPercent: -8 },
            {
              xPercent: 8,
              ease: "none",
              scrollTrigger: {
                trigger: panel,
                containerAnimation: pan,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            }
          );
        });

        gsap.to("[data-progress]", {
          scaleX: 1,
          ease: "none",
          scrollTrigger: { trigger: root.current, start: "top top", end: () => `+=${distance()}`, scrub: true },
        });
      });

      // Smaller screens: a plain vertical list, each card rising in as it arrives.
      mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray("[data-panel]", root.current).forEach((panel) => {
          gsap.from(panel, { y: 50, autoAlpha: 0, scrollTrigger: { trigger: panel, start: "top 85%" } });
        });
      });

      mm.add(MOTION, () => {
        gsap.from("[data-head] > *", {
          y: 30,
          autoAlpha: 0,
          stagger: 0.12,
          scrollTrigger: { trigger: root.current, start: "top 75%" },
        });
      });
    },
    { scope: root }
  );

  return (
    <section
      id="services"
      ref={root}
      aria-labelledby="services-title"
      className="relative overflow-hidden py-24 lg:motion-safe:flex lg:motion-safe:h-screen lg:motion-safe:flex-col lg:motion-safe:justify-center lg:motion-safe:py-0"
    >
      <div ref={track} className="flex flex-col gap-6 px-4 sm:px-8 lg:px-12 lg:motion-safe:w-max lg:motion-safe:flex-row lg:motion-safe:items-stretch lg:motion-safe:gap-8 lg:motion-reduce:mx-auto lg:motion-reduce:grid lg:motion-reduce:max-w-page lg:motion-reduce:grid-cols-2">
        <div data-head className="flex flex-col justify-end pb-6 lg:motion-safe:w-[34vw] lg:motion-safe:max-w-[480px] lg:motion-safe:pb-2 lg:motion-safe:pr-8">
          <h2 id="services-title" className="display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            You focus on growth. We handle the rest.
          </h2>
          <p className="lede mt-6 max-w-[40ch]">
            Four services that work on their own or as one line, from the first sourcing call to the delivery van.
          </p>
        </div>

        {services.map((s) => (
          <article
            key={s.id}
            data-panel
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface lg:motion-safe:h-[72vh] lg:motion-safe:w-[38vw] lg:motion-safe:max-w-[560px]"
          >
            <div className="relative aspect-[4/3] overflow-hidden lg:motion-safe:aspect-auto lg:motion-safe:flex-1">
              <img
                src={s.img}
                alt={s.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full scale-[1.18] object-cover transition-[filter] duration-500 group-hover:brightness-110"
              />
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight sm:text-[1.75rem]">{s.title}</h3>
              <p className="mt-3 max-w-[42ch] leading-relaxed text-mute">{s.body}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="page-x mt-10 hidden lg:motion-safe:block" aria-hidden="true">
        <div className="h-px w-full bg-line">
          <div data-progress className="h-px origin-left scale-x-0 bg-accent" />
        </div>
      </div>
    </section>
  );
};

export default Services;
