import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  isLoading?: boolean;
};

export function HandleError({ children, isLoading }: Props) {
  if (!isLoading) return children;
  return <h1>Cargando...</h1>;
}
