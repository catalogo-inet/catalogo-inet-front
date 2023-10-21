import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function Main({ children }: Props) {
  return <main className="mx-auto max-w-5xl px-5">{children}</main>;
}
