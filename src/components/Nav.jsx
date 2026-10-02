import { useRef, useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { gsap, ScrollTrigger, useGSAP, MOTION } from "../lib/gsap";
import { scrollToHash } from "../lib/useSmoothScroll";
import { navLinks, CONTACT_LABEL } from "../constants";
import logo from "../assets/logo.svg";

const Nav = () => {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  const [open, setOpen] = useState(false);

  // Hide on scroll down, reveal on scroll up; add a backdrop once past the hero top.
  useGSAP(
    () => {
      const nav = navRef.current;
      const mm = gsap.matchMedia();

      mm.add(MOTION, () => {
        gsap.from(nav, { yPercent: -100, opacity: 0, duration: 1, delay: 0.2 });

        ScrollTrigger.create({
          start: 0,
          end: "max",
          onUpdate: (self) => {
            const hide = self.direction === 1 && self.scroll() > 240;
            gsap.to(nav, { yPercent: hide ? -110 : 0, duration: 0.45, ease: "power2.out", overwrite: "auto" });
          },
        });
      });

      ScrollTrigger.create({
        start: 40,
        end: "max",
        toggleClass: { targets: nav, className: "is-scrolled" },
      });
    },
    { scope: navRef }
  );

  // Mobile menu open/close
  useGSAP(
    () => {
      const menu = menuRef.current;
      if (!menu) return;
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (open) {
        gsap.to(navRef.current, { yPercent: 0, duration: 0.3, overwrite: "auto" });
        gsap.set(menu, { autoAlpha: 1 });
        gsap.fromTo(
          menu.querySelectorAll("[data-menu-item]"),
          { yPercent: 110 },
          { yPercent: 0, stagger: 0.06, duration: reduce ? 0 : 0.7, ease: "power4.out" }
        );
      } else {
        gsap.to(menu, { autoAlpha: 0, duration: reduce ? 0 : 0.25 });
      }
    },
    { dependencies: [open] }
  );

  const go = (hash) => (e) => {
    e.preventDefault();
    setOpen(false);
    scrollToHash(hash);
  };

  return (
    <>
    <header
      ref={navRef}
      className="group fixed inset-x-0 top-0 z-50 transition-colors duration-300 [&.is-scrolled]:border-b [&.is-scrolled]:border-line [&.is-scrolled]:bg-canvas/80 [&.is-scrolled]:backdrop-blur-md"
    >
      <nav className="page-x flex h-16 items-center justify-between lg:h-[72px]" aria-label="Primary">
        <a href="#home" onClick={go("#home")} className="relative z-50 shrink-0" aria-label="Glory Impact, back to top">
          <img src={logo} alt="Glory Impact" className="h-9 w-auto lg:h-10" width="100" height="40" />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={go(`#${link.id}`)}
                className="rounded-full px-4 py-2 text-[15px] text-mute transition-colors hover:text-ink"
              >
                {link.title}
              </a>
            </li>
          ))}
          <li className="ml-3">
            <a href="#contact" onClick={go("#contact")} className="btn-primary py-2.5">
              {CONTACT_LABEL}
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="relative z-50 -mr-2 grid h-11 w-11 place-items-center rounded-full md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <List size={24} />}
        </button>
      </nav>
    </header>

      <div
        id="mobile-menu"
        ref={menuRef}
        className="invisible fixed inset-0 z-40 flex flex-col justify-end bg-canvas px-4 pb-12 opacity-0 md:hidden"
        aria-hidden={!open}
      >
        <ul className="flex flex-col gap-2">
          {[...navLinks, { id: "contact", title: CONTACT_LABEL }].map((link) => (
            <li key={link.id} className="overflow-hidden">
              <a
                data-menu-item
                href={`#${link.id}`}
                onClick={go(`#${link.id}`)}
                tabIndex={open ? 0 : -1}
                className="display block py-1 text-5xl"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Nav;
