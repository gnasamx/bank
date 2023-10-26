import { clsx as cn } from "clsx";
import { forwardRef } from "react";

const TextField = forwardRef(
  (
    {
      label,
      description,
      small,
      id,
      name,
      type = "text",
      placeholder,
      className,
      ...rest
    },
    forwardedRef,
  ) => {
    return (
      <fieldset>
        <div className="mb-5 flex flex-col">
          {label && <label htmlFor={id || name}>{label}</label>}
          {description && <p className="mt-1 text-secondary">{description}</p>}
        </div>
        <div className="flex flex-col gap-2">
          {small && (
            <small className="text-xs font-semibold text-secondary">
              {small}
            </small>
          )}
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
              "w-full rounded-lg bg-secondary px-3 py-3 text-primary shadow-sm outline-none ring-offset-0 transition-colors hover:bg-tertiary focus:bg-tertiary",
              className,
            )}
            {...rest}
          />
        </div>
      </fieldset>
    );
  },
);

TextField.displayName = "TextField";
export default TextField;
