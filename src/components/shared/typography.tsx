import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type TextProps = ComponentPropsWithoutRef<"span">;

export function Font12GrayMedium({
  children,
  className,
  ...props
}: TextProps) {
  return (
    <span
      {...props}
      className={cn(
        "font-sans text-[12px] font-medium leading-[16.5px] tracking-[0.55px] text-ink-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Font12WhiteMedium({
  children,
  className,
  ...props
}: TextProps) {
  return (
    <span
      {...props}
      className={cn(
        "font-sans text-[12px] font-medium leading-[16.5px] tracking-[0.55px] text-white",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Font13GrayRegular({
  children,
  className,
  ...props
}: TextProps) {
  return (
    <span
      {...props}
      className={cn(
        "font-sans text-[13px] font-normal text-ink-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Font14ForestMedium({
  children,
  className,
  ...props
}: TextProps) {
  return (
    <span
      {...props}
      className={cn(
        "font-sans text-[14px] font-medium leading-[20px] tracking-[0.35px] text-brand-forest",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Font48PlayfairRegular({
  children,
  className,
  ...props
}: TextProps) {
  return (
    <span
      {...props}
      className={cn(
        "font-heading text-3xl leading-9 font-normal tracking-normal sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-[48px]",
        className,
      )}
    >
      {children}
    </span>
  );
}
