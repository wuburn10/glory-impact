import { InstagramLogo, FacebookLogo, XLogo, LinkedinLogo } from "@phosphor-icons/react";
import { socials } from "../constants";
import logo from "../assets/logo.svg";

const icons = { instagram: InstagramLogo, facebook: FacebookLogo, x: XLogo, linkedin: LinkedinLogo };

const Footer = () => (
  <footer className="border-t border-line py-12">
    <div className="page-x flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
        <img src={logo} alt="Glory Impact" className="h-10 w-auto self-start" width="100" height="40" loading="lazy" />
        <p className="text-sm text-mute">
          &copy; {new Date().getFullYear()} Glory Impact (M) SDN BHD. All rights reserved.
        </p>
      </div>

      <ul className="flex gap-2">
        {socials.map((s) => {
          const Icon = icons[s.id];
          return (
            <li key={s.id}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-line text-mute transition-colors hover:border-ink/40 hover:text-ink"
              >
                <Icon size={18} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  </footer>
);

export default Footer;
