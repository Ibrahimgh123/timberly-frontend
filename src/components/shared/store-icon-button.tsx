import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type StoreIconButtonProps = ComponentPropsWithoutRef<"button"> & {
  "aria-label": string;
};

export function StoreIconButton({
  children,
  className,
  type = "button",
  ...props
}: StoreIconButtonProps) {
  return (
    <button
      {...props}
      type={type}
      className={cn(
        "inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-surface-white text-brand-forest shadow-sm transition-colors hover:bg-brand-sand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-surface-white disabled:pointer-events-none disabled:opacity-50",
        className,
      )}
    >
      {children}
    </button>
  );
}
