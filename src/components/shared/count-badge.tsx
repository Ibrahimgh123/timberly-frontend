import { AnnouncementBar } from "../layout/header/components/announcement-bar";
import { CategoryNav } from "../layout/header/components/category-nav";
import { MainHeader } from "../layout/header/components/main-header";

export function SiteHeader() {
  return (
    <header>
      <AnnouncementBar />
      <MainHeader />
      <CategoryNav />
    </header>
  );
}
