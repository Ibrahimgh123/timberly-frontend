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

export function Font12SecondarySemibold({
  children,
  className,
  ...props
}: TextProps) {
  return (
    <span
      {...props}
      className={cn(
        "font-sans text-xs leading-4 font-semibold tracking-[1.2px] text-ink-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Font12SandSemibold({
  children,
  className,
  ...props
}: TextProps) {
  return (
    <span
      {...props}
      className={cn(
        "font-sans text-xs leading-4 font-semibold tracking-normal text-brand-sand",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Font12ForestSemibold({
  children,
  className,
  ...props
}: TextProps) {
  return (
    <span
      {...props}
      className={cn(
        "font-sans text-xs leading-4 font-semibold tracking-normal text-brand-forest",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function Font10SecondaryRegular({
  children,
  className,
  ...props
}: TextProps) {
  return (
    <span
      {...props}
      className={cn(
        "font-sans text-[10px] leading-[15px] font-normal tracking-normal text-ink-secondary",
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
        "font-sans text-xs leading-[16.5px] font-medium tracking-[0.35px] text-brand-forest sm:text-[13px] sm:leading-[18px] lg:text-[14px] lg:leading-[20px]",
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

export function Font16JakartaLight({
  children,
  className,
  ...props
}: TextProps) {
  return (
    <span
      {...props}
      className={cn(
        "font-sans text-base leading-6 font-light tracking-normal",
        className,
      )}
    >
      {children}
    </span>
  );
}
