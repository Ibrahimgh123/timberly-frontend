import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type StoreBadgeProps = ComponentPropsWithoutRef<"span"> & {
  backgroundClassName: string;
  textClassName: string;
};

export function StoreBadge({
  backgroundClassName,
  textClassName,
  className,
  children,
  ...props
}: StoreBadgeProps) {
  return (
    <span
      {...props}
      className={cn(
        "inline-flex w-fit items-center justify-center px-3 py-1 font-sans text-[11px] font-bold leading-[16.5px] tracking-[1.1px] uppercase",
        backgroundClassName,
        textClassName,
        className,
      )}
    >
      {children}
    </span>
  );
}
