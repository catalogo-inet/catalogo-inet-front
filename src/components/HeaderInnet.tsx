import logoInnet from "../assets/images/logo-inet.png";
import logoMinisterio from "../assets/images/ministerio.png";
import Image from "next/image";

export function HeaderInnet() {
  return (
    <header className="h-24 bg-[var(--color-blue)] ">
      <div className="mx-auto max-w-5xl flex justify-between px-5 h-full">
        <Image
          className="w-48 object-contain"
          src={logoInnet}
          alt="logo innet"
        />
        <Image
          className="w-48 object-contain hidden sm:flex "
          src={logoMinisterio}
          alt="logo ministerio"
        />
      </div>
    </header>
  );
}
