import { 
  lav, fhw, bot,
  facebook, instagram, linkedin, twitter, 
  mi, mtc, ysp, 
  send, shield, star  
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "products",
    title: "Products",
  },
  {
    id: "clients",
    title: "Clients",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Global Trading",
    content:
      "We connect businesses across borders through strategic sourcing and reliable logistics partnerships.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Secure Supply Chain",
    content:
      "From manufacturing to retail, our supply chain solutions ensure safe, consistent, and timely delivery.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "End-to-End Development",
    content:
      "From product ideation to market launch, we offer integrated product development and e-commerce support.",
  },
];

export const products = [
  {
    id: "product-1",
    name: "Perfumes",
    img: lav,
  },
  {
    id: "product-2",
    name: "2 in 1 Haic Cream & Gel",
    img: bot,
  },
  {
    id: "product-3",
    name: "Herbal Feminine Wash",
    img: fhw,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Products Sold",
    value: "1M+",
  },
  {
    id: "stats-2",
    title: "Years Experience",
    value: "7+",
  },
  {
    id: "stats-3",
    title: "Global Clients",
    value: "4+",
  },
];

export const footerLinks = [
  {
    title: "Company",
    links: [
      {
        name: "About Us",
        link: "#about",
      },
      {
        name: "Services",
        link: "#services",
      },
      {
        name: "Clients",
        link: "#clients",
      },
      {
        name: "Careers",
        link: "#careers",
      },
      {
        name: "Terms of Service",
        link: "#terms",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Help Center",
        link: "#help",
      },
      {
        name: "Blog",
        link: "#blog",
      },
      {
        name: "Case Studies",
        link: "#case-studies",
      },
      {
        name: "Press",
        link: "#press",
      },
      {
        name: "Newsletters",
        link: "#newsletters",
      },
    ],
  },
  {
    title: "Partnership",
    links: [
      {
        name: "Our Partners",
        link: "#partners",
      },
      {
        name: "Become a Partner",
        link: "#become-partner",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/gloryimpactresources",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/gloryimpactresources",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/gloryimpact",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/company/gloryimpactresources",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: mi,
  },
  {
    id: "client-2",
    logo: mtc,
  },
  {
    id: "client-3",
    logo: ysp,
  },
];
