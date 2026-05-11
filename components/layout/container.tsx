import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return <div className="w-full max-w-[1200px] mx-auto px-6">{children}</div>;
}
