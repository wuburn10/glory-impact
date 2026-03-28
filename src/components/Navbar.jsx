import { useState, useEffect } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar-fixed w-full flex py-4 px-6 sm:px-16 justify-between items-center transition-all duration-300 ${scrolled ? "glass-nav py-3" : "bg-transparent"
        }`}
    >
      <img src={logo} alt="gloryimpact" className="w-44 h-14 object-contain" />

      {/* Desktop Nav */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`relative font-poppins font-medium cursor-pointer text-[15px] px-4 py-2 rounded-lg transition-all duration-300 nav-link ${active === nav.title
                ? "text-white bg-white/5"
                : "text-dimWhite hover:text-white hover:bg-white/5"
              } ${active === nav.title ? "active" : ""}`}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}

        <li className="ml-4">
          <a href="#contact-us">
            <button className="btn-primary py-2.5 px-6 font-poppins font-semibold text-[14px] text-primary bg-blue-gradient rounded-xl outline-none">
              Get in Touch
            </button>
          </a>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[26px] h-[26px] object-contain cursor-pointer"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${!toggle ? "hidden" : "flex"
            } glass-card p-6 absolute top-16 right-4 mx-0 my-2 min-w-[180px] rounded-2xl border-white/10 sidebar z-50`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col gap-3">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[15px] w-full py-1.5 transition-all duration-200 ${active === nav.title ? "text-white" : "text-dimWhite"
                  } hover:text-white`}
                onClick={() => {
                  setActive(nav.title);
                  setToggle(false);
                }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
