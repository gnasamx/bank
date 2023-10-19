import { clsx as cn } from "clsx";
import { forwardRef } from "react";

const TextField = forwardRef(
  (
    {
      label,
      description,
      id,
      name,
      type = "text",
      placeholder,
      className,
      helpText,
      ...rest
    },
    forwardedRef,
  ) => {
    return (
      <fieldset>
        {label && <label htmlFor={id || name}>{label}</label>}
        {description && <p className="mt-1 text-secondary">{description}</p>}
        <input
          ref={forwardedRef}
          id={id || name}
          name={name}
          type={type}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          placeholder={placeholder}
          className={cn(
            "mt-5 w-full rounded-lg bg-secondary px-3 py-3 text-primary shadow-sm outline-none ring-offset-0 transition-colors hover:bg-tertiary focus:bg-tertiary",
            className,
          )}
          {...rest}
        />
      </fieldset>
    );
  },
);

TextField.displayName = "TextField";
export default TextField;
