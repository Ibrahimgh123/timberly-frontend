import { HeroSlider } from "@/features/home/components/hero-slider";
import type { HeroSlideData } from "@/features/home/components/hero-slide";

const slides: HeroSlideData[] = [
  {
    id: "autumn",
    image: "/images/hero/autumn-living.jpg",
    imageAlt: "Armchair in a warm contemporary living room",
    badge: "Limited seasonal promotion",
    title: "Autumn Living Collection — Up to 25% Off Crafted Staples",
    description:
      "Elevate your sanctuary with master-planed solid timbers, refined bouclé finishes, and architectural serenity.",
    buttonLabel: "Shop now",
    href: "/en/products",
    note: "Free white-glove setup",
  },
  {
    id: "craftsmanship",
    image: "/images/hero/autumn-living.jpg",
    imageAlt: "Handcrafted wooden furniture",
    badge: "Ghourani craftsmanship",
    title: "Crafted for Your Home. Built to Last.",
    description:
      "Discover furniture shaped by skilled hands, natural materials, and your personal style.",
    buttonLabel: "Explore furniture",
    href: "/en/products",
    note: "Made with care",
  },
];

export default function HomePage() {
  return <HeroSlider slides={slides} />;
}
