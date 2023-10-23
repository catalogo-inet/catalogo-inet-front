import logoInet from "../assets/images/logo-inet.png";
import logoMinisterio from "../assets/images/ministerio.png";
import Image from "next/image";

export function HeaderInet() {
  return (
    <header className="h-[15vh] bg-[var(--color-blue)]">
      <div className="mx-auto max-w-5xl flex justify-between px-5 h-full">
        <Image className="w-48 object-contain" src={logoInet} alt="logo inet" />
        <Image
          className="w-48 object-contain hidden sm:flex "
          src={logoMinisterio}
          alt="logo ministerio"
        />
      </div>
    </header>
  );
}
