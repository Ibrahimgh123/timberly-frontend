import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="border-b border-outline-warm bg-palette-ece7df">
      <div className="mx-auto flex min-h-7 max-w-[1440px] items-center justify-between gap-4 px-4 lg:px-8">
        <p className="flex items-center gap-2 text-[9px] tracking-wide text-ink-secondary">
          <span className="size-1 shrink-0 rounded-full bg-brand-sand" />

          <span>
            WORLDWIDE BESPOKE WHITE-GLOVE DELIVERY
            <span className="hidden md:inline">
              {" "}• COMPLIMENTARY OVER $5,000
            </span>
          </span>
        </p>

        <div className="flex shrink-0 items-center gap-3 text-[9px]">
          <Link
            href="/en"
            lang="en"
            className="text-ink-deep-ink transition-colors hover:text-brand-walnut"
          >
            EN
          </Link>

          <Link
            href="/ar"
            lang="ar"
            className="text-ink-secondary transition-colors hover:text-brand-walnut"
          >
            العربية
          </Link>

          <span
            aria-hidden="true"
            className="h-3 w-px bg-outline-warm"
          />

          <span className="flex items-center gap-1 text-ink-secondary">
            USD ($)
            <ChevronDown className="size-3" aria-hidden="true" />
          </span>
        </div>
      </div>
    </div>
  );
}