import * as React from "react";

import { cn } from "@/libs/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "border-b border-[#5c5c5c] focus:border-[#a44246] hover:border-[#d1d1d1] bg-transparent placeholder-[#d1d1d1] outline-none pt-[5px] pb-[2px] transition-colors duration-500 text-sm h-12 pl-0",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
