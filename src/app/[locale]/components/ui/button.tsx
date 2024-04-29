import cn from "classnames";
import { ComponentProps, forwardRef } from "react";

export const Button = forwardRef<HTMLButtonElement, ComponentProps<"button">>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <button
        ref={forwardedRef}
        className={cn(
          "rounded text-white text-sm/5 py-1.5 px-3 font-medium bg-green hover:bg-green-dark disabled:bg-neutral-400 disabled:text-neutral-200 transition-colors duration-300",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
