import { clsx as cn } from "clsx";
import Link from "next/link";
import { forwardRef } from "react";

/**
 * primary - gray, accent - green, outlined - white with border, danger - red
 */

const Button = forwardRef(
  (
    {
      children,
      variant,
      type,
      size,
      onClick,
      form,
      className,
      disabled,
      ariaLabel,
      title,
      iconOnly,
      block,
      href,
    },
    forwardedRef,
  ) => {
    const primary = variant !== "secondary" && variant !== "danger";
    const secondary = variant === "secondary";
    const danger = variant === "danger";

    const Element = href ? Link : "button";

    return (
      <Element
        ref={forwardedRef}
        href={href}
        disabled={disabled}
        form={form}
        aria-label={ariaLabel}
        title={title}
        onClick={onClick}
        type={type || "button"}
        className={buttonClasses({
          className,
          primary,
          secondary,
          danger,
          disabled,
          iconOnly,
          size: size || "regular",
          block,
        })}
      >
        {children}
      </Element>
    );
  },
);

export function buttonClasses({
  className,
  primary,
  secondary,
  danger,
  disabled,
  iconOnly,
  size,
  block,
}) {
  const small = size === "small";
  const regular = size === "regular";
  const large = size === "large";

  // appearance-none scale-100 transition-transform active:scale-[0.98] flex h-9 items-center rounded-lg border border-gray-200 px-4 text-s font-semibold transition-colors hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-600
  // appearance-none scale-100 transition-transform active:scale-[0.98] flex h-full shrink-0 items-center px-4 text-s font-semibold transition-colors rounded-l-lg

  return cn(
    className,
    "appearance-none scale-100 transition-transform active:scale-[0.98] rounded-lg text-s font-medium transition-colors",
    {
      "bg-green-600 hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500 text-white":
        primary && !disabled,
      "bg-gray-100 hover:bg-gray-200 dark:bg-gray-750 dark:hover:bg-gray-700":
        secondary && !disabled,
      "bg-red-500 hover:bg-red-400 dark:bg-red-500/80 dark:hover:bg-red-500/90  text-white":
        danger && !disabled,
      "px-4 py-2": regular,
      "h-[32px] px-3 py-1": small,
      "h-10 px-5 leading-snug": large,
    },
  );
}

Button.displayName = "Button";
export default Button;
