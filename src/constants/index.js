import lavende from "../assets/products/lavende-perfume.webp";
import hairCream from "../assets/products/hair-cream-gel.webp";
import ufresh from "../assets/products/ufresh-feminine-wash.webp";
import sevenOil from "../assets/products/seven-oil.webp";
import ufreshPdf from "../assets/docs/ufresh.pdf";
import sevenOilPdf from "../assets/docs/sevenoil.pdf";

import containerShip from "../assets/stock/container-ship.webp";
import manufacturing from "../assets/stock/manufacturing.webp";
import warehouse from "../assets/stock/warehouse.webp";
import retail from "../assets/stock/retail.webp";

import mi from "../assets/clients/mi.png";
import mtc from "../assets/clients/mtc.png";
import ysp from "../assets/clients/ysp.png";

export const CONTACT_LABEL = "Get in touch";

export const contact = {
  person: "M. Suppiah",
  role: "Managing Director",
  phone: "+60162440677",
  phoneLabel: "+60 16-244 0677",
  email: "gloryimpact238@gmail.com",
  address: ["8 Avenue Business Center, A-3-9", "Jalan 8/1, 46000 Petaling Jaya", "Selangor, Malaysia"],
};

export const navLinks = [
  { id: "services", title: "Services" },
  { id: "products", title: "Products" },
  { id: "reach", title: "Reach" },
];

export const services = [
  {
    id: "trading",
    title: "Global trading",
    body: "Strategic sourcing and reliable logistics partners that move goods across borders on schedule.",
    img: containerShip,
    alt: "Container ship loaded with cargo at sea",
  },
  {
    id: "manufacturing",
    title: "Contract manufacturing",
    body: "Formulation, filling and packaging with vetted factories, held to the specification you sign off.",
    img: manufacturing,
    alt: "Engineer working at a production line workstation",
  },
  {
    id: "supply",
    title: "Supply chain",
    body: "Warehousing, inventory and distribution planned end to end, so stock arrives safe and on time.",
    img: warehouse,
    alt: "Warehouse floor stacked with boxed inventory",
  },
  {
    id: "development",
    title: "Product and e-commerce",
    body: "From the first idea to market launch: branding, listings and the store that sells it.",
    img: retail,
    alt: "Customer paying for a product at a retail counter",
  },
];

export const products = [
  {
    id: "lavende",
    name: "Perfume Collection",
    line: "A range of fragrances, bottled and boxed for retail.",
    img: lavende,
    glow: "rgba(190, 40, 52, 0.55)",
  },
  {
    id: "hair-cream",
    name: "2 in 1 Hair Cream & Gel",
    line: "Hold and conditioning in one tube, made for daily styling.",
    img: hairCream,
    glow: "rgba(170, 186, 210, 0.4)",
  },
  {
    id: "ufresh",
    name: "Herbal Feminine Wash",
    line: "A gentle herbal wash for everyday intimate care.",
    img: ufresh,
    glow: "rgba(214, 92, 156, 0.45)",
    doc: ufreshPdf,
  },
  {
    id: "seven-oil",
    name: "Seven Oil Golden Shower Oil",
    line: "Seven botanical oils blended into one nourishing shower oil.",
    img: sevenOil,
    glow: "rgba(222, 160, 48, 0.5)",
    doc: sevenOilPdf,
  },
];

export const stats = [
  { id: "sold", value: 1, suffix: "M+", label: "Products sold" },
  { id: "years", value: 7, suffix: "+", label: "Years in trade" },
  { id: "countries", value: 4, suffix: "", label: "Countries served" },
];

export const countries = ["Malaysia", "Singapore", "Indonesia", "Thailand"];

export const clients = [
  { id: "mi", name: "M International", logo: mi },
  { id: "mtc", name: "Majestic Touch Concepts", logo: mtc },
  { id: "ysp", name: "Y.S.P. SAH", logo: ysp },
];

export const socials = [
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/gloryimpactresources" },
  { id: "facebook", label: "Facebook", href: "https://www.facebook.com/gloryimpactresources" },
  { id: "x", label: "X", href: "https://www.twitter.com/gloryimpact" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/gloryimpactresources" },
];
