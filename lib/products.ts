export interface Product {
  number: string;
  name: string;
  description: string;
  tag: string;
  url: string;
}

export const products: Product[] = [
  {
    number: "01",
    name: "6AM CLUB",
    description:
      "A morning ritual community. Wake up, show up, build discipline together.",
    tag: "Community",
    url: "https://www.6pmcollective.com/protocol.html",
  },
  {
    number: "02",
    name: "FAILFORWARD",
    description:
      "Angel investing in founders who move fast and break things. Backing conviction over consensus.",
    tag: "Investing",
    url: "https://failforward.no",
  },
  {
    number: "03",
    name: "FOUNDERS SPORT CLUB",
    description:
      "Where founders compete off-screen. Sport as the operating system for high performance.",
    tag: "Sports",
    url: "#",
  },
  {
    number: "04",
    name: "MOON LANDER",
    description:
      "A retro arcade game. Built for fun, shipped for nostalgia.",
    tag: "Game",
    url: "https://moon-lander-sandy.vercel.app",
  },
  {
    number: "05",
    name: "NOMADSMAP",
    description:
      "The field guide for digital nomads. Real data, real places, no fluff.",
    tag: "Guide",
    url: "https://nomadsmap.co",
  },
];
