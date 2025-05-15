import { 
  people01, people02, people03, 
  facebook, instagram, linkedin, twitter, 
  airbnb, binance, coinbase, dropbox, 
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
    id: "about",
    title: "About Us",
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

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Glory Impact Resources helped us scale our production with reliable manufacturing and global reach.",
    name: "Angela Thompson",
    title: "COO, PureEssence",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Their team went above and beyond to help us navigate international trade challenges with ease.",
    name: "James Liu",
    title: "Head of Sourcing, NovaTech",
    img: people02,
  },
  {
    id: "feedback-3",
    content:
      "A one-stop solution for retail supply chain and e-commerce — truly global, truly impactful.",
    name: "Lena Rodriguez",
    title: "Founder, EcoGlam",
    img: people03,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Products Delivered",
    value: "10,000+",
  },
  {
    id: "stats-2",
    title: "Countries Served",
    value: "25+",
  },
  {
    id: "stats-3",
    title: "Global Clients",
    value: "300+",
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
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];
