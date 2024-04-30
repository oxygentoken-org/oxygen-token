import cn from "classnames";
import { ReactNode, ComponentProps, forwardRef } from "react";

type Props = ComponentProps<"input"> & {
  id: string;
  label: ReactNode;
  variant?: "medium" | "large";
  error?: string;
};

export const InputWithLabel = forwardRef<HTMLInputElement, Props>(
  (
    { id, label, children, className, variant = "medium", error, ...props },
    forwardedRef
  ) => {
    return (
      <div className={cn("flex flex-col justify-between", className)}>
        <label className="font-medium text-base/5 mb-2" htmlFor={id}>
          {label}
          {props.required && (
            <span className="font-normal text-neutral-700"> *</span>
          )}
        </label>
        <input
          ref={forwardedRef}
          className={cn(
            "border border-neutral-500 rounded px-4 placeholder:text-neutral-400",
            "outline-2 focus-visible:outline-green",
            {
              "text-sm/8": variant == "medium",
              "text-base/9": variant == "large",
              "outline-red-500 outline -outline-offset-2": error !== undefined,
            }
          )}
          id={id}
          {...props}
        />
        <div className="mt-1 text-red-500 text-xs/3 min-h-3">{error}</div>
        {children}
      </div>
    );
  }
);
