import type { ComponentProps, ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type SharedProps = {
  children: React.ReactNode;
  className?: string;
  backgroundClassName?: string;
  textClassName?: string;
};

type LinkProps = SharedProps &
  Omit<ComponentProps<typeof Link>, "href" | "className" | "children"> & {
    href: string;
  };

type NativeButtonProps = SharedProps &
  Omit<
    ComponentPropsWithoutRef<"button">,
    "className" | "children"
  > & { href?: undefined };

type StoreButtonProps = LinkProps | NativeButtonProps;

const baseClassName =
  "inline-flex min-h-11 items-center justify-center px-7 font-sans text-xs leading-4 font-semibold tracking-[1.2px] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 disabled:pointer-events-none disabled:opacity-50";

export function StoreButton(props: StoreButtonProps) {
  const {
    href,
    children,
    className,
    backgroundClassName = "bg-brand-forest hover:bg-brand-walnut",
    textClassName = "text-surface-white",
    ...elementProps
  } = props;

  const mergedClassName = cn(
    baseClassName,
    backgroundClassName,
    textClassName,
    className,
  );

  if (href !== undefined) {
    return (
      <Link
        href={href}
        {...(elementProps as Omit<
          ComponentProps<typeof Link>,
          "href" | "className" | "children"
        >)}
        className={mergedClassName}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      {...(elementProps as Omit<
        ComponentPropsWithoutRef<"button">,
        "className" | "children"
      >)}
      className={mergedClassName}
    >
      {children}
    </button>
  );
}
