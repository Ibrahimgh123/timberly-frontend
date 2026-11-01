import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Font12GrayMedium } from "@/components/shared/typography";

export function AnnouncementBar() {
  return (
    <div className="border-b border-outline-warm bg-palette-ece7df">
      <div className="flex min-h-8 items-center justify-between gap-4 px-4 lg:px-8">
        <p className="flex items-center gap-2 text-[9px] tracking-wide text-ink-secondary">
          <span className="size-1.5 rounded-full bg-brand-sand" />
          <span>
            <Font12GrayMedium>
              WORLDWIDE BESPOKE WHITE-GLOVE DELIVERY COMPLIMENTARY OVER $5,000
            </Font12GrayMedium>
          </span>
        </p>

        <div className="flex shrink-0 items-center gap-3 text-[9px]">
          <Link href="/en" lang="en">
            <Font12GrayMedium className="text-brand-forest">
              EN
            </Font12GrayMedium>
          </Link>

          <Link href="/ar" lang="ar">
            <Font12GrayMedium>العربية</Font12GrayMedium>
          </Link>

          <span aria-hidden="true" className="h-3 w-px bg-outline-warm" />

          <span className="flex items-center gap-1">
            <Font12GrayMedium>USD ($)</Font12GrayMedium>
            <ChevronDown className="size-3" aria-hidden="true" />
          </span>
        </div>
      </div>
    </div>
  );
}
