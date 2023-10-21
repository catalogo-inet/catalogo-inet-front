import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Main({ children, className = "" }: Props) {
  return (
    <main className={`relative mx-auto max-w-5xl px-5 ${className}`}>
      {children}
    </main>
  );
}
