import { useRef } from "react";
import { EnvelopeSimple, Phone, MapPin } from "@phosphor-icons/react";
import { gsap, SplitText, useGSAP, MOTION } from "../lib/gsap";
import { contact, CONTACT_LABEL } from "../constants";
import kl from "../assets/stock/kuala-lumpur.webp";

const Contact = () => {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION, () => {
        const split = SplitText.create("[data-close-title]", {
          type: "words",
          mask: "words",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.words, {
              yPercent: 100,
              stagger: 0.06,
              duration: 1.1,
              ease: "power4.out",
              scrollTrigger: { trigger: root.current, start: "top 65%" },
            }),
        });

        gsap.from("[data-close-fade]", {
          y: 30,
          autoAlpha: 0,
          stagger: 0.1,
          scrollTrigger: { trigger: root.current, start: "top 55%" },
        });

        gsap.fromTo(
          "[data-close-img]",
          { yPercent: -12 },
          {
            yPercent: 12,
            ease: "none",
            scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: true },
          }
        );

        // The call to action leans toward the pointer when it comes close.
        const btn = root.current.querySelector("[data-magnet]");
        if (!window.matchMedia("(pointer: fine)").matches) return () => split.revert();
        const mx = gsap.quickTo(btn, "x", { duration: 0.6, ease: "power3.out" });
        const my = gsap.quickTo(btn, "y", { duration: 0.6, ease: "power3.out" });
        const onMove = (e) => {
          const r = btn.getBoundingClientRect();
          const dx = e.clientX - (r.left + r.width / 2);
          const dy = e.clientY - (r.top + r.height / 2);
          const near = Math.hypot(dx, dy) < 140;
          mx(near ? dx * 0.3 : 0);
          my(near ? dy * 0.3 : 0);
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

  return (
    <section id="contact" ref={root} aria-labelledby="contact-title" className="py-24 sm:py-32">
      <div className="page-x grid gap-14 lg:grid-cols-12 lg:gap-8">
        <div className="flex flex-col justify-between lg:col-span-7">
          <div>
            <h2 id="contact-title" data-close-title className="display text-5xl leading-[1.02] sm:text-6xl lg:text-[5.5rem]">
              Ready to grow with us?
            </h2>
            <p data-close-fade className="lede mt-6 max-w-[44ch]">
              Tell us what you want to make, source or ship, and we will plan the route with you.
            </p>
            <div data-close-fade className="mt-10">
              <a data-magnet href={`mailto:${contact.email}`} className="btn-primary px-8 py-4 text-base">
                {CONTACT_LABEL}
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-10 sm:grid-cols-2">
            <div data-close-fade>
              <p className="text-lg font-medium">{contact.person}</p>
              <p className="text-mute">{contact.role}</p>
            </div>
            <ul data-close-fade className="flex flex-col gap-4 text-ink/85">
              <li>
                <a href={`tel:${contact.phone}`} className="flex items-center gap-3 transition-colors hover:text-accent">
                  <Phone size={18} className="text-accent" aria-hidden="true" />
                  {contact.phoneLabel}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-3 break-all transition-colors hover:text-accent">
                  <EnvelopeSimple size={18} className="shrink-0 text-accent" aria-hidden="true" />
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-accent" aria-hidden="true" />
                <address className="not-italic leading-relaxed">
                  {contact.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative h-[60vh] overflow-hidden rounded-2xl lg:col-span-5 lg:h-[80vh]">
          <img
            data-close-img
            src={kl}
            alt="Kuala Lumpur skyline at night seen from above"
            loading="lazy"
            className="absolute inset-x-0 top-[-12%] h-[124%] w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
