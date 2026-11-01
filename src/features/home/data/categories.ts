import type { CategoryItem } from "../components/category-card";

export function getHomeCategories(locale: "en" | "ar"): CategoryItem[] {
  const items = [
    {
      id: "living-room",
      title: "Living Room",
      image: "living-room.png",
      subtitle: "18 Designs",
    },
    {
      id: "bedroom",
      title: "Bedroom",
      image: "Bedroom.png",
      subtitle: "12 Designs",
    },
    {
      id: "dining-room",
      title: "Dining Room",
      image: "dining-room.png",
      subtitle: "15 Designs",
    },
    {
      id: "kitchen",
      title: "Kitchen",
      image: "kitchen.png",
      subtitle: "20 Designs",
    },
    {
      id: "tables-desks",
      title: "Tables",
      image: "Tables.png",
      subtitle: "10 Designs",
    },
    {
      id: "cabinets-storage",
      title: "Cabinets",
      image: "Cabinets.png",
      subtitle: "12 Designs",
    },
    {
      id: "office",
      title: "Office Furniture",
      image: "office-furniture.png",
      subtitle: "8 Designs",
    },
  ];

  return items.map((item) => ({
    id: item.id,
    title: item.title,
    image: `/images/category/${item.image}`,
    href: `/${locale}/products?category=${item.id}`,
    subtitle: item.subtitle,
  }));
}
