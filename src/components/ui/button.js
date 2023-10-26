import { clsx as cn } from "clsx";
import Link from "next/link";
import { forwardRef } from "react";

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
    const primary =
      variant !== "accent" && variant !== "danger" && variant !== "outlined";
    const outlined = variant === "outlined";
    const accent = variant === "accent";
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
          outlined,
          accent,
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
  accent,
  outlined,
  danger,
  disabled,
  iconOnly,
  size,
  block,
}) {
  const small = size === "small";
  const regular = size === "regular";
  const large = size === "large";

  return cn(
    className,
    "appearance-none scale-100 transition-transform active:scale-[0.98] rounded-lg text-s transition-colors",
    {
      "bg-gray-100 hover:bg-gray-200 dark:bg-gray-750 dark:hover:bg-gray-700":
        primary && !disabled,
      "border border-gray-200 hover:bg-gray-200 dark:border-gray-600 dark:hover:bg-gray-600":
        outlined && !disabled,
      "bg-green-600 hover:bg-green-500 dark:bg-green-600 dark:hover:bg-green-500 text-white":
        accent && !disabled,
      "bg-red-500 hover:bg-red-400 dark:bg-red-500/80 dark:hover:bg-red-500/90  text-white":
        danger && !disabled,
      "font-medium px-4 py-2": regular,
      "font-medium h-[32px] px-3 py-1": small,
      "font-semibold h-10 px-5 leading-snug": large,
    },
  );
}

Button.displayName = "Button";
export default Button;
