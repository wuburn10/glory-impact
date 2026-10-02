import { useRef } from "react";
import { Check } from "@phosphor-icons/react";
import { gsap, useGSAP, MOTION } from "../lib/gsap";
import port from "../assets/stock/port-aerial.webp";

const points = ["Quality sourcing and manufacturing", "End-to-end logistics support", "Retail supply that scales with you"];

const Reach = () => {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION, () => {
        // The window onto the port opens to full bleed as it rises into view.
        gsap.fromTo(
          "[data-frame]",
          { clipPath: "inset(14% 12% 14% 12% round 24px)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 0px)",
            ease: "none",
            scrollTrigger: { trigger: root.current, start: "top bottom", end: "top top", scrub: true },
          }
        );
        gsap.fromTo(
          "[data-frame] img",
          { scale: 1.35 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
          }
        );

        gsap.from("[data-reach-copy] > *", {
          y: 40,
          autoAlpha: 0,
          stagger: 0.12,
          scrollTrigger: { trigger: root.current, start: "top 15%" },
        });
      });
    },
    { scope: root }
  );

  return (
    <section id="reach" ref={root} aria-labelledby="reach-title" className="relative h-[100svh] min-h-[620px]">
      <div data-frame className="absolute inset-0 overflow-hidden">
        <img src={port} alt="Aerial view of a container port with cranes and stacked cargo" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,13,18,0.94)_0%,rgba(11,13,18,0.6)_40%,rgba(11,13,18,0)_70%)]" />
      </div>

      <div className="page-x relative flex h-full items-end pb-16 sm:pb-20">
        <div data-reach-copy className="grid w-full gap-10 lg:grid-cols-12 lg:items-end">
          <h2 id="reach-title" className="display text-4xl leading-[1.05] sm:text-5xl lg:col-span-7 lg:text-6xl">
            Take your products to the world. We keep every step in view.
          </h2>
          <ul className="flex flex-col gap-4 lg:col-span-4 lg:col-start-9">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-ink/85">
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-accent text-accent-ink">
                  <Check size={14} weight="bold" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Reach;
