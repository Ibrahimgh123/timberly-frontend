import type { CategoryItem } from "../components/category-card";

export function getHomeCategories(locale: "en" | "ar"): CategoryItem[] {
  const items = [
    {
      id: "living-room",
      title: "Living Room",
      image: "living-room.jpg",
    },
    {
      id: "bedroom",
      title: "Bedroom",
      image: "bedroom.jpg",
    },
    {
      id: "dining-room",
      title: "Dining Room",
      image: "dining-room.jpg",
    },
    {
      id: "kitchen",
      title: "Kitchen",
      image: "kitchen.jpg",
    },
    {
      id: "tables-desks",
      title: "Tables",
      image: "tables.jpg",
    },
    {
      id: "cabinets-storage",
      title: "Cabinets",
      image: "cabinets.jpg",
    },
    {
      id: "office",
      title: "Office Furniture",
      image: "office.jpg",
    },
  ];

  return items.map((item) => ({
    id: item.id,
    title: item.title,
    image: `/images/categories/${item.image}`,
    href: `/${locale}/products?category=${item.id}`,
  }));
}