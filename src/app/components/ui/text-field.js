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
      className,
      helpText,
      ...rest
    },
    forwardedRef
  ) => {
    return (
      <fieldset>
        {label && <label htmlFor={id || name}>{label}</label>}
        {description && <p className="text-secondary mt-1">{description}</p>}
        <input
          ref={forwardedRef}
          id={id || name}
          name={name}
          type={type}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          className={cn(
            // "focus-ring w-full rounded border border-secondary px-1.5 py-sm text-base text-primary shadow-sm ring-offset-0",
            "focus-ring mt-5 w-full rounded-lg px-3 py-3 text-primary bg-secondary shadow-sm ring-offset-0",
            className
          )}
          {...rest}
        />
      </fieldset>
    );
  }
);

TextField.displayName = "TextField";
export default TextField;
