import { useRef } from "react";
import { gsap, useGSAP, MOTION } from "../lib/gsap";
import { stats, countries } from "../constants";

const Stats = () => {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION, () => {
        const tl = gsap.timeline({ scrollTrigger: { trigger: root.current, start: "top 70%" } });

        gsap.utils.toArray("[data-count]", root.current).forEach((el, i) => {
          const end = Number(el.dataset.count);
          const obj = { v: 0 };
          tl.to(
            obj,
            {
              v: end,
              duration: 1.6,
              ease: "power2.out",
              onUpdate: () => (el.textContent = Math.round(obj.v)),
            },
            i * 0.15
          );
        });

        tl.from("[data-stat]", { y: 40, autoAlpha: 0, stagger: 0.15, duration: 1 }, 0).from(
          "[data-country]",
          { yPercent: 100, stagger: 0.08, duration: 0.8 },
          0.5
        );
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} aria-label="Glory Impact in numbers" className="py-24 sm:py-32">
      <div className="page-x">
        <dl className="grid gap-12 sm:grid-cols-3 sm:gap-8">
          {stats.map((s) => (
            <div key={s.id} data-stat className="border-t border-line pt-6">
              <dt className="text-mute">{s.label}</dt>
              <dd className="display mt-3 text-7xl leading-none tabular-nums lg:text-8xl">
                <span data-count={s.value}>{s.value}</span>
                <span className="text-accent">{s.suffix}</span>
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-16 flex flex-wrap gap-x-8 gap-y-2 text-2xl font-medium tracking-tight text-ink/80 sm:text-3xl" aria-label="Countries served">
          {countries.map((c) => (
            <li key={c} className="overflow-hidden">
              <span data-country className="block">
                {c}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Stats;
