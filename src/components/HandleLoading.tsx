import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isLoading?: boolean;
};

export function HandleLoading({ children, isLoading }: Props) {
  if (!isLoading) return children;
  return <h1 className="text-black">cargando...</h1>;
}
