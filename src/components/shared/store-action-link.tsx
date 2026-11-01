import type { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Font12SandSemibold } from "@/components/shared/typography";

type StoreActionLinkProps = ComponentPropsWithoutRef<typeof Link> & {
  iconClassName?: string;
};

export function StoreActionLink({
  children,
  className,
  iconClassName,
  ...props
}: StoreActionLinkProps) {
  return (
    <Link
      {...props}
      className={cn("group inline-flex items-center gap-1", className)}
    >
      <Font12SandSemibold className="text-[13px] transition-colors group-hover:text-neutral-black">
        {children}
      </Font12SandSemibold>
      <ArrowRight
        className={cn(
          "size-3 text-brand-sand transition-colors group-hover:text-neutral-black",
          iconClassName,
        )}
        aria-hidden="true"
      />
    </Link>
  );
}
