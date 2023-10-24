import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  hasError?: boolean;
};

export function HandleError({ children, hasError }: Props) {
  if (!hasError) return children;
  return <h1 className="text-red-500 font-bold">ERROR</h1>;
}
