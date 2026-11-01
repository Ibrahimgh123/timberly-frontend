import type { ReactNode } from "react";
import { Footer } from "@/components/layout/footer";
import Header from "@/components/layout/header/header";

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
