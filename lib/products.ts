export interface Product {
  name: string;
  tagline: string;
  url: string;
  index: string;
}

export const products: Product[] = [
  {
    name: "Headleap",
    tagline: "Personal OS for a better life",
    url: "https://headleap.app",
    index: "01",
  },
  {
    name: "Pledge It",
    tagline: "Social challenge app",
    url: "https://getpledge.it",
    index: "02",
  },
  {
    name: "Tell My Life Story",
    tagline: "AI-powered memoir creation",
    url: "https://tellmylifestory.com",
    index: "03",
  },
  {
    name: "6am Collective",
    tagline: "Morning accountability community for financial goals",
    url: "#",
    index: "04",
  },
  {
    name: "Founders Sports Club",
    tagline: "Where founders compete",
    url: "#",
    index: "05",
  },
];
