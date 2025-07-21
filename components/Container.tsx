import React, { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

// Define the props interface for TypeScript
interface ContainerProps {
  className?: string;
  children?: ReactNode;
}

// Create the Container component
const Container: FC<ContainerProps> = ({ className, children }) => {
  // Merge default Tailwind classes with the passed className
  const mergedClassName = twMerge(
    "w-full px-3 sm:px-10 lg:px-10 xl:px-10 mx-auto xl:max-w-[1440px]",
    className
  );

  return <div className={mergedClassName}>{children}</div>;
};

export default Container;