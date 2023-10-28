"use client";

import { HeaderInet } from "./HeaderInet";
import { FooterInet } from "./FooterInet";
import { Main } from "./Main";
import { ReactNode } from "react";
import { Popup } from "@/components/Popup/Popup";
import dynamic from "next/dynamic";
import { useGlobalContext } from "@/hooks/useGlobalContext";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });
interface Props {
  children: ReactNode;
}

export function Layout({ children }: Props) {
  const { popup, showMap } = useGlobalContext();

  return (
    <>
      <div
        className={`relative min-h-screen bg-[var(--color-white)] ${
          !popup ? "overflow-hidden h-screen" : "overflow-auto"
        }`}
      >
        {!popup && <Popup />}
        <HeaderInet />
        <Main className={showMap ? "" : "pt-10"}>{children}</Main>
        <div className={`min-h-[85vh] ${showMap ? "flex" : "hidden"}`}>
          <Map />
        </div>
        <FooterInet />
      </div>
    </>
  );
}
