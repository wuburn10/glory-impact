import { useRef } from "react";
import { gsap, useGSAP, MOTION } from "../lib/gsap";
import { clients } from "../constants";

// Logos repeat enough times to fill wide screens, then the track loops by exactly one set.
const SETS = 4;

const Clients = () => {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION, () => {
        const track = root.current.querySelector(".marquee-track");
        const loop = gsap.to(track, { xPercent: -100 / SETS, duration: 26, ease: "none", repeat: -1 });

        gsap.from(root.current.querySelector("p"), {
          y: 16,
          autoAlpha: 0,
          scrollTrigger: { trigger: root.current, start: "top 85%" },
        });

        // Hovering slows the marquee so a logo can be read.
        const onEnter = () => gsap.to(loop, { timeScale: 0.25, duration: 0.6 });
        const onLeave = () => gsap.to(loop, { timeScale: 1, duration: 0.6 });
        track.addEventListener("pointerenter", onEnter);
        track.addEventListener("pointerleave", onLeave);
        return () => {
          track.removeEventListener("pointerenter", onEnter);
          track.removeEventListener("pointerleave", onLeave);
        };
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} aria-labelledby="clients-title" className="border-y border-line py-12 sm:py-14">
      <div className="page-x">
        <p id="clients-title" className="text-sm text-mute">
          Trusted by partners in retail and distribution
        </p>
      </div>
      <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <ul className="marquee-track flex w-max">
          {Array.from({ length: SETS }).flatMap((_, set) =>
            clients.map((c) => (
              <li key={`${set}-${c.id}`} className="flex w-[200px] shrink-0 items-center justify-center px-8 sm:w-[280px]" aria-hidden={set > 0}>
                <img
                  src={c.logo}
                  alt={set === 0 ? c.name : ""}
                  className="h-12 w-auto max-w-full object-contain opacity-70 brightness-0 invert transition-opacity duration-300 hover:opacity-100 sm:h-14"
                  loading="lazy"
                />
              </li>
            ))
          )}
        </ul>
      </div>
    </section>
  );
};

export default Clients;
